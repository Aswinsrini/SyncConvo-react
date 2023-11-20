import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

const inter = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sync Convo",
  description: "AI based chatbot built using the chatgpt api.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ overflow: "hidden" }}>
        <div className="flex">
          {/* isSidebar?<div></div>: */}
          <div className="bg-[#202123] max-w-xs min-h-screen">
            <Sidebar />
          </div>

          {/* Client Provider */}
          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
      <script></script>
    </html>
  );
}
