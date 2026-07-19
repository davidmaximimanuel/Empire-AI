import { NextResponse } from 'next/server';

// Calls the shared Empire ID service — same one AIM and Empire Union's
// website use — so this site never touches Supabase directly either.
const EMPIRE_ID_SERVICE_URL = process.env.EMPIRE_ID_SERVICE_URL;
const EMPIRE_ID_SERVICE_API_KEY = process.env.EMPIRE_ID_SERVICE_API_KEY;

export async function POST(request) {
  try {
    const { logto_id, username, email } = await request.json();

    if (!logto_id) {
      return NextResponse.json({ error: "Missing Logto ID" }, { status: 400 });
    }

    const res = await fetch(`${EMPIRE_ID_SERVICE_URL}/v1/empire-id`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': EMPIRE_ID_SERVICE_API_KEY,
      },
      body: JSON.stringify({
        logto_id,
        username: username || 'Unknown',
        email: email || '',
        source: 'ai_website', // distinct from Empire Union's "website" and AIM's "telegram_bot"
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || `Empire ID service returned ${res.status}`);
    }

    return NextResponse.json({
      success: true,
      empire_id: data.empire_id,
      message: data.created ? "New Empire ID created!" : "ID retrieved successfully",
    });

  } catch (error) {
    console.error("Empire ID API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}