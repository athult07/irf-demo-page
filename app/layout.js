import "./globals.css";

export const metadata = {
  title: "IRF",
  description: "Horse racing app ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
