import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Tailwind QR Code Generator | Free Custom QR Maker",
  description:
    "Create customizable QR codes with Tailwind colors, logos, and multiple export formats. Generate QR codes for URLs, text, and config matching your Tailwind theme.",
  keywords: [
    "Tailwind qr code generator",
    "Tailwind qr maker",
    "Tailwind theme qr code",
    "qr code generator",
    "free qr code maker",
    "custom qr code",
    "qr code with logo",
    "qr code creator",
    "generate qr code",
    "qr code download",
    "url qr code",
    "wifi qr code",
    "online qr generator",
    "Businesswish"
  ],
  alternates: { canonical: `${baseUrl}/tools/qr-generator` },
  openGraph: {
    title: "Tailwind QR Code Generator | Free Custom QR Maker",
    description: "Create customizable QR codes with logos, colors, and multiple export formats matching your theme.",
    url: `${baseUrl}/tools/qr-generator`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Code Generator",
    description: "Create custom QR codes with logos and colors. Free online tool.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
