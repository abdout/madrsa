// import Menu from "@/components/Menu";
// import Navbar from "@/components/Navbar";
// import Image from "next/image";
// import Link from "next/link";

// export default function DashboardLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <div className="h-screen flex">
//       {/* LEFT */}
//       <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
//         <Link
//           href="/"
//           className="flex items-center justify-center lg:justify-start gap-2"
//         >
//           <Image src="/logo.png" alt="logo" width={32} height={32} />
//           <span className="hidden lg:block font-bold">SchooLama</span>
//         </Link>
//         <Menu />
//       </div>
//       {/* RIGHT */}
//       <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
//         <Navbar />
//         {children}
//       </div>
//     </div>
//   );
// }
import { SiteHeader } from "@/components/atom/header/ui";
import { docsConfig } from "@/components/atom/sidebar/constant";
import { DocsSidebarNav } from "@/components/atom/sidebar/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CombinedLayoutProps {
  children: React.ReactNode;
}

export default function CombinedLayout({ children }: CombinedLayoutProps) {
  return (
    <div className="mx-auto w-full border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x">
      <SiteHeader />
      <div className="flex border-b border-border/40 dark:border-border">
        {/* Sidebar Navigation */}
        <aside className="hidden md:block fixed top-14 z-30 -ml-2 h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:w-[90px] lg:w-[150px]">
          <ScrollArea className="h-full  pr-2 ">
            <DocsSidebarNav config={docsConfig} />
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-[20px] lg:ml-[20px]">
          {children}
        </main>
      </div>
      {/* <SiteFooter /> */}
    </div>
  );
}
