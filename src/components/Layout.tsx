// src/components/Layout.tsx
import { ReactNode } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer"; // Make sure to import Footer

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default Layout;