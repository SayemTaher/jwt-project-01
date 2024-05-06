import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setServices(data)
        })
    },[])
    return (
        <div className="mt-5 mb-5">
            <div className="flex flex-col text-center justify-center items-center gap-5">
                <h3 className="text-4xl font-bold text-orange-600">Our Services</h3>
                <p className="max-w-[700px]">Keep your vehicle running smoothly with our comprehensive General Maintenance services. From oil changes and fluid checks to brake inspections and battery tests, our expert technicians ensure your car is in top condition. Trust us to provide reliable and efficient maintenance that prolongs the life of your vehicle. </p>
            </div>
            <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-5 justify-center">
                {
                    services.map((service,idx) =><Service key={idx} service={service}> </Service> )
                }
            </div>
            
        </div>
    );
};

export default Services;