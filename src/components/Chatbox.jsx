import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faShare, faRobot } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Chatbox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleChatbox = () => {
        setIsOpen(!isOpen)
    }
    const handleChatClose = () => {
        setIsOpen(false);
    }
    return (
        <div className="fixed bottom-2 right-2 bg-white  w-56  text-black border border-slate-600 shadow shadow-slate-600 rounded-t-lg">
            <p className="absolute animate-ping bg-green-500 top-1 left-1 shadow shadow-black p-1 border border-black rounded-full"></p>
            <p className="text-lg p-2  font-semibold text-center hover:cursor-pointer" onClick={toggleChatbox}>  Paypal Assistant <FontAwesomeIcon icon={faChevronUp} className="ml-3" /></p><hr />
            {isOpen && (
                <>
                    <div className="my-4 p-2 flex items-center"><FontAwesomeIcon className="text-slate-600 border border-black p-1 rounded-full " icon={faRobot} /><span className=" bg-blue-500 w-min p-1 px-8  shadow-xl text-white  rounded-t-xl rounded-r-xl m-2">
                        Hello!!!
                    </span></div>

                    <div className="mt-[10.5rem] ">
                        <hr />
                        <input type="text" placeholder="Type here...." className="px-[0.85rem] border-0 py-2 focus:outline-none" /><FontAwesomeIcon onClick={handleChatClose} className="absolute bottom-3 right-5" icon={faShare} />
                    </div>
                </>
            )}
        </div>

    );
}
export default Chatbox;
