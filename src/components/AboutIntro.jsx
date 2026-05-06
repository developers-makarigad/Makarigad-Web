import Image from "next/image";

const AboutIntro = ({ heading, body, image }) => (
    <div className="flex flex-col lg:flex-row pt-0 justify-center items-center md:px-10">
        <div className="flex-1 font-[Poppins] items-center p-6">
            <h3 className="font-[Poppins] font-semibold text-center mb-4 text-sky-600 items-center text-wrap">
                {heading}
            </h3>
            <br />
            <p className="font-[Poppins] text-sm text-center md:text-base font-normal mb-4 px-5 md:px-10 text-gray-400 whitespace-pre-line">
                {body}
            </p>
        </div>
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
    </div>
);

export default AboutIntro;