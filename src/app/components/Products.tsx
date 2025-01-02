import Image from "next/image";

import picture1 from "@/images/product (1).jpg";
import pic2 from "@/images/product (2).jpg";
import pic3 from "@/images/product (3).jpg";
import pic4 from "@/images/product (4).jpg";
import pic5 from "@/images/product (5).jpg";
import pic6 from "@/images/product (6).jpg";
import pic7 from "@/images/product (7).jpg";
import pic8 from "@/images/product (8).jpg";
import Cardtxt from "./Cardtxt";

export default function Products() {
  return (
    <div className="w-full absolute top-[1470px] left-0 flex justify-center">
      <div className="w-[1124px] py-[80px] flex flex-col gap-[80px]">
        {/* Text Section */}
        <div className="w-full flex flex-col gap-[10px] justify-center items-center">
          <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {/* Product Cards */}
          {[picture1, pic2, pic3, pic4, pic5, pic6, pic7, pic8].map(
            (pic, index) => (
              <div key={index} className="w-[238px] h-[auto] mx-auto">
                <div className="w-full h-auto">
                  <div className="w-[239px]">
                    <Image src={pic} alt={`picture${index + 1}`} />
                  </div>
                  <Cardtxt />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
