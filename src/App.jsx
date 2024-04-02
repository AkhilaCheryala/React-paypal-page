 import Nav from "./components/Nav";
 import Form from "./components/Form";
 import './App.css';
 
function App() {
  return (
    <>
    <Nav/>
    <Form/>
    <div className="font-bold text-white bg-blue-900 sm:h-48 md:h-60 ">
      <h1 className="font-extrabold text-2xl">Connect with our sales team</h1>
      <p>Let’s talk about how PayPal can power your growth.</p>
    </div> 
    </>
  ) 
}

export default App
