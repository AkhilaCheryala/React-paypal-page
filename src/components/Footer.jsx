import logo from '../assets/logo.svg';
import flag from '../assets/flag.png';
const Footer =()=>{

    return(
<div className='ml-32 text-blue-950 font-bold  mb-10'>
    <img src={logo} className='w-44 h-44  mt-[-2rem] lg:mt-[40rem]' alt=''/>
    <div className='flex flex-row gap-10 w-2/3 items-center  border-b-4 mb-6 pb-4'>
        <a href='/' className='footer-link'>Help</a>
        <a href='/' className='footer-link'>Contact</a>
        <a href='/' className='footer-link'>Fees</a>
        <a href='/' className='footer-link'>Security</a>
        <a href='/' className='footer-link'>Apps</a>
        <a href='/' className='footer-link'>Shop</a>
        <a href='/' className='footer-link'>Enterprise</a>
        <a href='/' className='footer-link'>Partners</a>
        <img src={flag} className='ml-56' alt=''/>
    </div>
    
    <div className='flex flex-row gap-10 w-2/3   items-center'>
        <a href='/' className='footer-link'>About</a>
        <a href='/' className='footer-link'>Newsroom</a>
        <a href='/' className='footer-link'>Jobs</a>
        <a href='/' className='footer-link'>Investor Relations</a>
        <a href='/' className='footer-link'>Values in Action</a>
        <a href='/' className='footer-link'>Public Policy</a>
    </div>
    <div className='flex flex-row gap-10 w-2/3   items-center mt-8'>
        <a href='/' className='text-slate-800 font-medium'>1994</a>
        <a href='/' className='footer-link'>Accessibility</a>
        <a href='/' className='footer-link'>Privacy</a>
        <a href='/' className='footer-link'>Cookies</a>
        <a href='/' className='footer-link'>Legal</a>
        
    </div>
</div>
    );
 }
 export default Footer