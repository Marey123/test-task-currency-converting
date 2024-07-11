import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-violet-400">
      <Navigation />
      <main id="main" className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="">{children}</div>
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
