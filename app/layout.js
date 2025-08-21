import "./globals.css";

export const metadata = {
  title: "3D Bird Showcase",
  description: "Interactive 3D phoenix bird showcase in Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
