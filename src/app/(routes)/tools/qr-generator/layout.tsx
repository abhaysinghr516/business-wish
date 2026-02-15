import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "QR Code Generator | Free Custom QR Code Maker",
  description:
    "Create customizable QR codes with logos, colors, and multiple export formats. Generate QR codes for URLs, text, WiFi, and more. Free, no signup required.",
  keywords: [
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
  ],
  alternates: { canonical: `${baseUrl}/tools/qr-generator` },
  openGraph: {
    title: "QR Code Generator | Free Custom QR Code Maker",
    description: "Create customizable QR codes with logos, colors, and multiple export formats.",
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
