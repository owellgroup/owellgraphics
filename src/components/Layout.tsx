import { ReactNode } from "react";
import TopNav from "./TopNav";
import MainNav from "./MainNav";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <MainNav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
