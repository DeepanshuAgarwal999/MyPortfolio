import LeftSidebar from "@/components/shared/LeftSidebar";
import Navbar from "@/components/shared/Navbar/Navbar";
import RightSidebar from "@/components/shared/RightSidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#000000] relative">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section className="min-h-screen pt-18 flex flex-1  max-md:pb-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidebar />
      </div>
      {/* Toaster */}
    </main>
  );
};

export default Layout;
