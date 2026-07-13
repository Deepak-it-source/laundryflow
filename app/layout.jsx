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
  title: "Dhobi Housz — Premium Laundry & Dry Cleaning in Raipur",
  description:
    "Dhobi Housz is Raipur's premium laundry & dry cleaning service — wash & fold, dry cleaning, steam ironing with free home pickup and delivery. Shop No 3, Raheja Residency, Avanti Vihar, Raipur. Call 7354003303.",
  keywords: [
    "laundry Raipur",
    "dry cleaning Raipur",
    "premium laundry service",
    "laundry pickup and delivery Raipur",
    "steam ironing Raipur",
    "Dhobi Housz",
  ],
  openGraph: {
    title: "Dhobi Housz — Premium Laundry & Dry Cleaning in Raipur",
    description:
      "From washing machine to luxury laundry. Free home pickup & delivery across Raipur. Call 7354003303.",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="grain">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}",
          }}
        />
        {children}
      </body>
    </html>
  );
}
