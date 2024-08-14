import Header from "../Components/Header";


export const metadata = {
  title: "IRF",
  description: "Horse racing app ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}</body>
    </html>
  );
}
