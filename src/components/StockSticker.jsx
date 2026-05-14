"use client";
import Image from "next/image";

export default function StockSticker(){
    return(
        <section
        className="relative w-full font-[Poppins]">
            <div className="flex flex-col md:flex-row md:divide-x divide-y md:divide-y-0 divide-gray-600 py-10">
                <div className="flex-1 p-6 font-semibold items-center justify-center md:ml-0 ml-10 mr-10 md:mr-0">
                    <Image src="/images/StockImage/vecteezy_two-business-professionals-shaking-hands_1225544.jpg" alt="image" 
                                width={500}
                                height={400}
                               
                                />
                </div>
                <div className="flex-1 p-10 ">
                    <p className="text-md font-stretch-50% text-sky-500">Initial Public Offering</p>
                    <h3 className="text-2xl font-semibold text-gray-500">Invest in what we're building.</h3>
                     <h3 className="text-2xl font-semibold text-blue-800">Together</h3>
                     &nbsp;
                     <p className="text-md font-norma text-gray-600">Join us in growing together — become a shareholder and be part of our next chapter. </p>
                     <br />
                     <button 
                     onClick={() => window.open("/prospectus/Placeholder_PDF.pdf", "_blank")}
                     className="justify-center gap-2 bg-linear-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden hover:cursor-pointer">View our Prospectus → </button>
                </div>
                
            </div>

        </section>
    )
}