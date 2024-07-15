const Footer = () => {
    return (
        <footer className=" bg-[#151515] text-[#FFF] py-10">
            <div className="grid grid-cols-2 gap-10 md:gap-0 md:flex justify-between w-[90%] mx-auto md:w-[80%] max-w-[1440px]">
                <aside className="flex flex-col">
                    <img className="w-[80px] text-[#FFF]" src="https://i.imghippo.com/files/j8cOb1714536713.svg" alt="" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav className="flex flex-col text-base font-normal">
                    <h6 className="font-semibold text-xl pb-3 text-[#FFF]">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>

                <nav className="flex flex-col text-base font-normal">
                    <h6 className="font-semibold text-xl pb-3 text-[#FFF]">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="flex flex-col text-base font-normal">
                    <h6 className="font-semibold text-xl pb-3 text-[#FFF]">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </div>
        </footer>
    );
};

export default Footer;