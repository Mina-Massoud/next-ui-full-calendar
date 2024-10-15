import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { ModalProvider } from "@/providers/modal-provider";
import { SchedulerProvider } from "@/providers/schedular-provider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <SchedulerProvider>
          <ModalProvider>
            <Providers
              themeProps={{ attribute: "class", defaultTheme: "dark" }}
            >
              <Navbar />
              <div className="relative flex flex-col h-screen">
                <main className="w-full p-6 flex-grow">{children}</main>
                <footer className="w-full flex items-center gap-3 justify-center py-3">
                <span className="text-default-600">For Contacting</span>

                  <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://mina-massoud.onrender.com/"
                    title="nextui.org homepage"
                  >
                    Mina Massoud
                  </Link>
                </footer>
              </div>
            </Providers>
          </ModalProvider>
        </SchedulerProvider>
      </body>
    </html>
  );
}
