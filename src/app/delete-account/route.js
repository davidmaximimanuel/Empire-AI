import { NextResponse } from 'next/server';

// Deletes this user's Empire ID + app history immediately via the shared
// Empire ID service — no Logto Management API needed for that part.
// Their actual Logto login (email/password) gets queued for manual
// removal instead, since that piece needs a paid-plan M2M app slot.
// See the Empire ID service's /v1/empire-id/by-logto/<id> DELETE route.

function getUserIdFromToken(token) {
  if (!token || typeof token !== 'string' || token.split('.').length !== 3) {
    return null;
  }
  try {
    const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    return payload.sub || null;
  } catch {
    return null;
  }
}

export async function POST(request) {
  try {
    const authHeader = request.headers.get('authorization') || '';
    const userToken = authHeader.replace('Bearer ', '');

    const userId = getUserIdFromToken(userToken);
    if (!userId) {
      return NextResponse.json(
        { error: 'No valid access token received. Try signing out and back in, then retry.' },
        { status: 401 }
      );
    }

    const res = await fetch(
      `${process.env.EMPIRE_ID_SERVICE_URL}/v1/empire-id/by-logto/${userId}?source=ai_website`,
      {
        method: 'DELETE',
        headers: { 'X-API-Key': process.env.EMPIRE_ID_SERVICE_API_KEY },
      }
    );

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || `Empire ID service returned ${res.status}`);
    }

    return NextResponse.json({
      success: true,
      message: 'Your Empire ID and app data have been deleted. Your login will be fully removed within 48 hours.',
    });
  } catch (error) {
    console.error('Delete account error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}