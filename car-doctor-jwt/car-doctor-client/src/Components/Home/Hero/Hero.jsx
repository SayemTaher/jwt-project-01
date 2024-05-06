

const Hero = () => {

    return (
        <div>
            <div className="carousel w-full min-h-[750px] rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Tqhnx1x/1.jpg" className="w-full h-[750px] object-cover" />
                    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <div className="flex flex-col gap-2 backdrop-blur-md w-full rounded-xl p-3 ">
                            <h1 className="font-bold text-white text-6xl max-w-[500px]">Affordable Price For Car Servicing</h1>
                            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-4 items-center mt-10">
                                <button className="btn btn-error bprder-2 border-white w-[200px]  text-white  text-center">Discover More</button>
                                <button className="btn  text-white  btn-primary text-center w-[200px]">Book an Appointment</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <div className="flex gap-4 items-center" >
                            <a href="#slide4" className="btn btn-circle disabled" >❮</a>
                            <a href="#slide2" className="btn btn-circle bg-blue-950 text-white">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/0VNjbGB/2.jpg" className="w-full h-[750px] object-cover" />
                    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <div className="flex flex-col gap-2 backdrop-blur-md w-full rounded-xl p-3 ">
                            <h1 className="font-bold text-white text-6xl max-w-[500px]">Affordable Price For Car Servicing</h1>
                            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-4 items-center mt-10">
                                <button className="btn btn-error bprder-2 border-white w-[200px]  text-white  text-center">Discover More</button>
                                <button className="btn  text-white  btn-primary text-center w-[200px]">Book an Appointment</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <div className="flex gap-4 items-center" >
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-blue-950 text-white">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/L0NHQt7/5.jpg" className="w-full h-[750px] object-cover" />
                    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <div className="flex flex-col gap-2 backdrop-blur-md w-full rounded-xl p-3 ">
                            <h1 className="font-bold text-white text-6xl max-w-[500px]">Affordable Price For Car Servicing</h1>
                            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-4 items-center mt-10">
                                <button className="btn btn-error bprder-2 border-white w-[200px]  text-white  text-center">Discover More</button>
                                <button className="btn   btn-primary text-white text-center w-[200px]">Book an Appointment</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <div className="flex gap-4 items-center" >
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle bg-blue-950 text-white">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/vjbzmk6/4.jpg" className="w-full h-[750px] object-cover" />
                    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <div className="flex flex-col gap-2 backdrop-blur-md w-full rounded-xl p-3 ">
                            <h1 className="font-bold text-white text-6xl max-w-[500px]">Affordable Price For Car Servicing</h1>
                            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-4 items-center mt-10">
                                <button className="btn btn-error bprder-2 border-white w-[200px]  text-white  text-center">Discover More</button>
                                <button className="btn   btn-primary text-white text-center w-[200px]">Book an Appointment</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <div className="flex gap-4 items-center" >
                            <a href="#slide3" className="btn btn-circle bg-blue-950 text-white">❮</a>
                            <a href="#slide1" className="btn btn-circle  disabled ">❯</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;