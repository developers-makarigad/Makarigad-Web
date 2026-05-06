const VisionBanner = ({ heading, body }) => (
    <h2 className="font-[Poppins] font-semibold text-center mb-4 text-white px-10 md:px-36 py-6 md:py-10 bg-linear-to-r from-blue-200 via-blue-400 to-sky-500">
        {heading} - <br />
        {body}
    </h2>
);

export default VisionBanner;