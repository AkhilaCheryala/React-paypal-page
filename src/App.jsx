 import Nav from "./components/Nav";
 import Form from "./components/Form";
 import './App.css';
import Enquiry from "./components/Enquiry";
 
function App() {
  return (
    <div>
    <Nav/>
   
    <div className="font-bold text-white bg-blue-900 h-80 lg:h-96 md:h-60 p-2  pt-6 text-left ">
      <div className=" lg:pl-20 lg:pt-16 ">
      <p className="font-bold lg:w-80 text-3xl mt-3 md:text-4xl">Connect with our sales team.</p>
      <p className="text-xl mt-4">Let’s talk about how PayPal can power your growth.</p>
    </div>
    </div>
    <div>
      <Form/>
      </div>
      <Enquiry/>
    </div>
  ) 
}

export default App
