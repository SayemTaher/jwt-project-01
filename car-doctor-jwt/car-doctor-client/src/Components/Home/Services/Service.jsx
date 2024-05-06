/* eslint-disable react/prop-types */

import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
    const {
        _id,
       
        title,
        img,
        price,
        
    } = service
    return (
        <div className="bg-gray-100 shadow-sm rounded-xl p-3 h-[350px] gap-5 flex flex-col justify-between">
            <div className="flex items-center justify-center">
                <img src={img} className="w-[400px]  rounded-xl shadow-xl h-[200px] object-cover" alt={`img of ${_id}`} />
            </div>

            <h1 className="text-[#444444] text-3xl font-bold">{title}</h1>
            <div className="flex items-center justify-between">
                <span className=" text-orange-400 text-xl tracking-wide">Price: € {price}</span>
                
                    <Link to={`/details/${_id}`}><button className=" btn bg-white w-[60px] flex items-center justify-center text-center  rounded-xl text-xl shadow-xl text-orange-600 font-bold"><IoIosArrowRoundForward ></IoIosArrowRoundForward></button></Link>
                    
                
            </div>



        </div>
    );
};

export default Service;