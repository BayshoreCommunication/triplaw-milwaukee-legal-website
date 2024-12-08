import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MainNavbar from "@/components/MainNavbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "700", "900"],
});

// export const metadata = {
//   title:
//     "Florida Immigration Lawyer Firm || USA Immigration Attorney Hardam Tripathi, Esq.",
//   description:
//     "Florida Immigration Law Services Call our local Immigration office for your Green Card, Naturalization or Investor Visa.",
//   metadataBase: new URL("https://triplaw-milwaukee-legal-website.vercel.app/"),
//   alternates: {
//     canonical: "/",
//     languages: {
//       "en-US": "/en-USA",
//     },
//   },
//   openGraph: {
//     images: "/opengraph-image.jpg",
//   },
// };
export const metadata = {
  metadataBase: new URL("https://www.milwaukeelegalpros.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <div className="overflow-x-hidden text-black bg-white">
            <MainNavbar />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
