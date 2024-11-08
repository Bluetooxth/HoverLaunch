import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/Montserrat.ttf",
  weight: "400 500",
});

export const metadata = {
  title: "HoverLaunch",
  description: "Showcase your links, startups and projects to a global audience of tech enthusiasts, investors, and potential customers.",
  keywords: "startup, showcase, links, projects, tech, audience, investors, customers",
  image: "https://em-content.zobj.net/source/apple/325/rocket_1f680.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistSans.className}>{children}</body>
    </html>
  );
}
