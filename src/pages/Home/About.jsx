const About = () => {
    return (
        <div className="bg-base-200 py-5 lg:py-20">
            <div className="flex flex-col justify-start items-center lg:flex-row gap-24 md:gap-24 lg:gap-14">
                <div className="lg:w-[50%]">
                    <div className="relative md:h-[350px] md:w-[450px] flex justify-start items-center">
                        <img className="rounded-lg h-[350px] md:w-[450px] object-cover" src="https://i.imghippo.com/files/fGg3J1714560152.jpg" />
                        <div className="">
                            <img className="absolute z-50 rounded-md md:h-[250px] object-cover md:top-1/2 md:-right-[100px] left-16  sm:-bottom-20 w-[80%] md:w-[100%] h-[200px]" src="https://i.imghippo.com/files/Rbut51714560358.jpg" alt="" />
                        </div>
                    </div>

                </div>
                <div className="lg:w-[50%] px-2">
                    <h3 className="text-xl text-[#FF3811] font-semibold">About Us</h3>
                    <h1 className="pt-5 text-3xl md:text-5xl font-bold text-center md:text-start">We are qualified & of experience in this field</h1>
                    <p className="py-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                    <button className="mt-7 text-white bg-[#FF3811] hover:bg-[#FF3811] px-2 md:px-4 py-2 border-2 border-[#FF3811] rounded-md md:text-lg font-normal">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;