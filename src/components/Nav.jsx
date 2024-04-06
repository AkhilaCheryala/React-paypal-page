import React, { useState } from "react";
import Paypal from '../assets/Paypal.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import SignUpLogin from "./SignUpLogin";

const Nav = () => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSignUp = () => {
        setShowSignUp(true);
        setShowLogin(false);
    };

    const handleLogin = () => {
        setShowSignUp(false);
        setShowLogin(true);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const handleCloseSignUpLogin = () => {
        setShowSignUp(false);
        setShowLogin(false);
    };
    return (
        <div className="bg-white flex justify-between p-2 items-center font-medium mb-2">
            <div className="flex items-center gap-7 text-blue-900 text-xl">
                <img src={Paypal} className="w-10 h-10 m-2 mr-8" alt="logo" />
                <div className="hidden md:block md:flex lg:gap-12 md:gap-8">
                    <a href="/">Personal</a>
                    <a href="/">Business</a>
                    <a href="/">Developer</a>
                    <a href="/">Help</a>
                </div>
            </div>
            <div className="flex items-center">
                <button onClick={handleSignUp} className="border-2 border-blue-900 m-2 p-2 px-5 rounded-3xl text-blue-900">Sign Up</button>
                <button onClick={handleLogin} className="border m-2 p-[.6rem] px-7b rounded-3xl px-6 p-[.7rem] text-white bg-blue-900">Login</button>
                {(showSignUp || showLogin) && (
                    <div>
                        <SignUpLogin
                            isSignUp={showSignUp}
                            onSignUp={handleSignUp} 
                            onLogin={handleLogin}  
                            onClose={handleCloseSignUpLogin}   />
                    </div>
                )}
                <button onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="w-8 h-8 md:hidden text-blue-900" />
                </button>
            </div>
            {menuOpen && (
                <div className="fixed inset-0 flex mt-16 bg-white bg-opacity-95 ">
                    <div className="max-w-md p-8 ">
                        <div className="flex flex-col gap-12 text-2xl text-blue-900 ">
                            <a href="/"  >Personal <FontAwesomeIcon icon= {faChevronRight} className="w-4 h-5"/></a>
                            <a href="/" > Small Business <FontAwesomeIcon icon= {faChevronRight} className="w-4 h-5"/></a>
                            <a href="/"> Enterprise <FontAwesomeIcon icon= {faChevronRight} className="w-4 h-5"/></a>
                            <a href="/">Developer <FontAwesomeIcon icon= {faChevronRight} className="w-4 h-5"/></a>
                            <a href="/">What's new <FontAwesomeIcon icon= {faChevronRight} className="w-4 h-5"/></a>
                            <a href="/">Help <FontAwesomeIcon icon= {faChevronRight} className="w-4 h-5"/></a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Nav;
