import Image from "next/image";

const LocationSection = ({ heading, body, image }) => (
    <div className="flex flex-col lg:flex-row pt-10 justify-center items-center bg-zinc-50 md:px-10">
        <div className="flex-1 font-[Poppins] justify-center items-center max-w-xl mx-10 bg-blue-300 p-6 mb-10 md:px-5 rounded-2xl w-[350px] md:w-full">
            <Image
                src={image}
                alt=""
                width={0}
                height={0}
                sizes="400vw md:100vw"
                className="object-contain rounded-2xl w-full h-full"
            />
        </div>
        <div className="lg:max-w-xl items-center justify-self-center flex-1 p-6">
            <h3 className="font-[Poppins] font-semibold text-center mb-4 text-sky-600 items-center text-wrap">
                {heading}
            </h3>
            <p className="text-center text-sm md:text-base font-normal text-gray-400 font-[Poppins] px-5 md:px-10 whitespace-pre-line">
                {body}
            </p>
        </div>
    </div>
);

export default LocationSection;