interface IntroTextProps {
    sectionHeader: string;
    sectionText: string;
}

const IntroText: React.FC<IntroTextProps> = ( {sectionHeader, sectionText} ) => {
    return (
        <div className=" w-full mx-auto">
            <h1 className="w-fit mx-auto text-5xl font-bold">{sectionHeader}</h1>
            <p className="w-fit mx-auto my-4 text-lg font-normal">{sectionText}</p>
        </div>
    );
};

export default IntroText;