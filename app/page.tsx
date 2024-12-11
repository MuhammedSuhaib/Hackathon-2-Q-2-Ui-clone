import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Nvbr";
import Bredcrumb from "@/components/Bredcrumb";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden bg-white">
      <Header />
      <Nvbr />
      <Bredcrumb pageName="Home" />
      <div>
        <ul>
          <li><Link href = "/" >Home</Link></li>
          <li><Link href = "/FAQ" >FAQ</Link></li>
          <li><Link href = "/404" >404</Link></li>

        </ul>
      </div>
      <Footer />
      <Mi />
    </div>
  );
}
