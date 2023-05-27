
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-1/3 mx-auto">
            <p className="text-[#D99904] text-xl text-center">---{subHeading}---</p>
            <h1 className="text-[40px] uppercase text-center border-y-4 my-5">{heading}</h1>
        </div>
    );
};

export default SectionTitle;