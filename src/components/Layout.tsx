import { ReactNode } from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <nav className="bg-white top-0 left-0 right-0 z-50 fixed shadow">
        <Header />
      </nav>
      <main className="mt-[150px] container max-w-2xl mx-auto max-lg:px-6 mb-20">
        {children}
      </main>
      <footer className=" bg-[#FAFAFA]">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
