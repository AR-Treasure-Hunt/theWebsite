import NavBar from "../components/NavBar/index";
import Footer from "../components/Footer/index";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="content-container">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
