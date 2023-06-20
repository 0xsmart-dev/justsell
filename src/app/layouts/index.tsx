import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopProvider from "app/components/ScrollToTopProvider";
type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <ScrollToTopProvider>
        <Header />
        <div className="pt-20 px-4 pb-8">{children}</div>
        <Footer />
      </ScrollToTopProvider>
    </>
  );
};

export default Layout;
