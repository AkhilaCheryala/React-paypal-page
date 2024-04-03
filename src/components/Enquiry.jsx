import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Enquiry=()=>{

    return(
        <div className=" flex flex-col gap-10  p-20">
        <p className="text-3xl font-normal w-72"> Some other ways to connect with us</p>
        <div>
        <p className=" font-medium text-lg mb-2"> Want to speack with Sales right away?</p>
        <a href="/" className="text-sky-600 text-medium font-bold ">Call 888-777-6666</a>
        </div>
        <div>
        <p className=" font-medium text-lg mb-2 "> Need help with your exisiting account?</p>
        <a href="/"className="text-sky-600 text-medium  font-bold  ">Visit our Help Center<FontAwesomeIcon icon={faArrowRight} className="ml-2"/></a>
        </div>
        <div>
        <p className=" font-medium text-lg mb-2 "> Want helpful business insights?</p>
        <a href="/"className="text-sky-600 text-medium  font-bold  ">Visit our Business Resource Center<FontAwesomeIcon icon={faArrowRight}className="ml-2"/></a>
        </div>
        </div>
    );
}
export default Enquiry