import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Enquiry = () => {


    return (
        <div>
            <div className=" hidden  lg:pl-20   lg:flex lg:flex-col lg:gap-8 lg:mt-[-54rem]  ">
                <p className="text-3xl font-[500]  lg:w-72  "> Some other ways to connect with us</p>
                <div>
                    <p className=" font-semibold text-lg lg:mb-2 "> Want to speak with Sales right away?</p>
                    <a href="/" className="text-sky-600 text-medium font-bold ">Call 888-777-6666</a>
                </div>
                <div >
                    <p className=" font-semibold text-lg mb-2 "> Need help with your exisiting account?</p>
                    <a href="/" className="text-sky-600 text-medium  font-bold  ">Visit our Help Center<FontAwesomeIcon icon={faArrowRight} className="ml-2" /></a>
                </div>
                <div>
                    <p className=" font-semibold text-lg mb-2 "> Want helpful business insights?</p>
                    <a href="/" className="text-sky-600 text-medium  font-bold  ">Visit our Business Resource Center<FontAwesomeIcon icon={faArrowRight} className="ml-2" /></a>
                </div>
            </div>
            <div className="lg:hidden mt-12 m-3 flex flex-col gap-5">
                <div className="border border-slate-200 shadow-lg shadow-gray-400 p-6 py-6 rounded-3xl bg-white">
                    <p className=" font-semibold text-lg mb-2 "> Want to speak with Sales right away?</p>
                    <a href="/" className="text-sky-600 text-medium font-bold ">Call 888-777-6666</a>
                </div>
                <div className="border border-slate-200 shadow-lg shadow-gray-400 p-6 py-6 rounded-3xl bg-white">
                    <p className=" font-semibold text-lg mb-2 "> Need help with your exisiting account?</p>
                    <a href="/" className="text-sky-600 text-medium  font-bold  ">Visit our Help Center<FontAwesomeIcon icon={faArrowRight} className="ml-2" /></a>
                </div>
                <div className="border border-slate-200 shadow-lg shadow-gray-400 p-8 py-10 rounded-3xl bg-white">
                    <p className=" font-semibold text-lg mb-2 "> Want helpful business insights?</p>
                    <a href="/" className="text-sky-600 text-medium  font-bold  ">Visit our Business Resource Center<FontAwesomeIcon icon={faArrowRight} className="ml-2" /></a>
                </div>
            </div>
        </div>
    );
}
export default Enquiry