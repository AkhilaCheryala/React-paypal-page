import logo from '../assets/logo.svg';
import flag from '../assets/flag.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
const Footer =()=>{

    return(
<div className='lg:ml-10 text-blue-950 font-bold  mb-12 text-sm mt-[6rem] ml-5  '>
    <img src={logo} className='w-28 h-28 pl-2 ' alt=''/>
    <div className='flex flex-wrap lg:flex-row lg:gap-10 gap-4 pl-2 items-center  border-b border-slate-300  mb-2 pb-2'>
     
        <a href='/' className='footer-link'>Help</a>
        <a href='/' className='footer-link'>Contact</a>
        <a href='/' className='footer-link'>Fees</a>
        <a href='/' className='footer-link'>Security</a>
        <a href='/' className='footer-link'>Apps</a>
        <a href='/' className='footer-link'>Shop</a>
        <a href='/' className='footer-link'>Enterprise</a>
        <a href='/' className='footer-link'>Partners</a>
        <img src={flag} className='lg:ml-56' alt=''/>
    </div>
    
    <div className='lg:flex lg:flex-row lg:gap-10  justify-between pl-2 lg:mr-4   items-center'>
        <div className='flex  flex-wrap gap-4 mb-5 lg:gap-9'>
        <a href='/' className='footer-link'>About</a>
        <a href='/' className='footer-link'>Newsroom</a>
        <a href='/' className='footer-link'>Jobs</a>
        <a href='/' className='footer-link'>Investor Relations</a>
        <a href='/' className='footer-link'>Values in Action</a>
        <a href='/' className='footer-link'>Public Policy</a>
        </div>
        <div className='flex gap-4 font-semibold '>
        <a href='/' className='text-slate-600 font-medium'> <FontAwesomeIcon icon={faCopyright}/> 1994-2024</a>
        <a href='/' className='footer-link'>Accessibility</a>
        <a href='/' className='footer-link'>Privacy</a>
        <a href='/' className='footer-link'>Cookies</a>
        <a href='/' className='footer-link'>Legal</a>
        
    </div>
    </div>
    
</div>
    );
 }
 export default Footer