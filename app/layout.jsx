import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "LaundryFlow — Premium Cloud Laundry Management Software",
  description:
    "LaundryFlow is a premium cloud-based laundry management platform: order tracking, WhatsApp automation, smart billing, analytics and reports for modern laundry businesses.",
  keywords: [
    "laundry management software",
    "laundry POS",
    "dry cleaning software",
    "laundry billing",
    "laundry analytics",
  ],
  openGraph: {
    title: "LaundryFlow — Premium Cloud Laundry Management Software",
    description:
      "From washing machine to luxury laundry empire. Orders, billing, WhatsApp automation and analytics in one cinematic platform.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05060a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
