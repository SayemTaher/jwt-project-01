

const About = () => {
    return (
        <div className="mt-5 mb-5 bg-white">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative">
                        <img className="w-3/4 rounded-xl shadow-2xl" src="https://i.ibb.co/JjMQyDx/person.jpg" alt="bla bla" />
                        <img className="w-1/2 absolute border-8 border-white right-5 rounded-xl top-1/2 " src="https://i.ibb.co/Sd4qs0K/parts.jpg" alt="blackship" />
                    </div>
                    {/* <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
                    <div className="lg:w-1/2">
                        <span className="text-orange-500 font-bold text-xl mb-5">About Us</span>
                        <h1 className="text-5xl font-bold mt-5 ">We are qualified & Expert in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. </p>
                        <button className="btn btn-primary">Get More Info </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;