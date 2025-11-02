import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transcendence — Supporting Providers. Strengthening Families. Serving Communities.",
  description: "Indiana provider network enabling family-centered outcomes through CatalystOS, compliance supports, and trauma-informed practice.",
  openGraph: {
    title: "Transcendence",
    description: "Provider-centered enablement for outcomes-focused care.",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
