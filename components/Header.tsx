import React from "react";
import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <header className="flex h-11 w-full bg-[#7E33E0] justify-center p-4 sm:p-0 md:justify-normal md:pl-[19%] md:gap-[23.15%]">
     <ul className="flex items-center justify-center gap-7">
               <li className="hidden items-center gap-[0.104%] md:flex">
                 <Image
                   src="/uil_envelope-alt.png"
                   alt="Email Icon"
                   width={16}
                   height={16}
                 />
                 <a
                   className="text-[14px] font-semibold text-[#F1F1F1] sm:text-[16px]"
                   href="mailto:mhhasanul@gmail.com"
                 >
                   mhhasanul@gmail.com
                 </a>
               </li>
               <li className="hidden items-center gap-[0.104%] md:flex">
                 <Image
                   src="/bx_bx-phone-call.png"
                   alt="Phone Icon"
                   width={16}
                   height={16}
                 />
                 <a
                   className="text-[14px] font-semibold text-[#F1F1F1] sm:text-[16px]"
                   href="tel:+ (12345)67890"
                 >
                   (12345)67890
                 </a>
               </li>
             </ul>
       {/* Right Section */}
       <ul className="flex text-[14px] text-[#F1F1F1] gap-4 sm:text-[16px]">
        <li className="flex items-center gap-[0.052%]">
            English
            <Image
              src="/Group.png"
              alt="Dropdown Icon"
              width={16}
              height={16}
            />
          </li>
          <li className="flex items-center gap-[0.052%]">
            USD
            <Image
              src="/Group.png"
              alt="Dropdown Icon"
              width={16}
              height={16}
            />
          </li>
          <li className="flex items-center gap-[0.052%]">
            <Link href="/Account">Login</Link>
            <Image
              src="/carbon_user.png"
              alt="User Icon"
              width={16}
              height={16}
            />
          </li>
          <li className="flex items-center gap-[0.052%]">
            Wishlist
            <Image
              src="/uil_heart-alt.png"
              alt="Heart Icon"
              width={16}
              height={16}
            />
          </li>
          <li className="flex items-center ml-2 gap-5">
            <Link href="/Shopping">
              <Image src="/crt.png" alt="Cart Icon" width={16} height={16} />
            </Link>
          </li>
        </ul>
    </header>
  );
}

export default Header;
