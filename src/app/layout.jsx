import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "Empire AI — Your intelligent thought partner",
  description: "AIM is your intelligent thought partner — built for founders, creators, and builders.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}