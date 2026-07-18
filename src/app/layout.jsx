import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "Empire AI — Your intelligent thought partner",
  description: "AIM is your intelligent thought partner — built for founders, creators, and builders.",
  icons: { icon: "/favicon.png" },
};

// Runs before hydration so the page never flashes the wrong theme on load.
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'dark' || stored === 'light'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}