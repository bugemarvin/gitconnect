import type { Metadata } from "next";
import "@app/globals.css";
import { fonts } from "@app/fonts";
import Provider from "@app/chakra-provider";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Git Connect",
  description:
    "A social network where developers create profile and portfolio, share posts and get help from others developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={fonts.lora.className}
      >
        <Provider>
          <Suspense fallback={""}>{children}</Suspense>
        </Provider>
      </body>
    </html>
  );
}
