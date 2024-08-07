import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div >
            <div className="flex flex-col justify-center items-center space-y-3">
                <h3 className="text-xl font-semibold text-[#FF3811]">Service</h3>
                <h1 className="text-3xl md:text-5xl font-bold">Our Service Area</h1>
                <p className="text-[#737373] text-center">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    services.map(service => <ServiceCard key={service.service_id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;