const Prefooter = () => {
    return (
        <div className="mt-20 lg:ml-10">
            <div className=" hidden lg:block lg:flex flex-row  gap-[20rem] mx-[2.5rem] font-bold text-blue-800 text-lg  ">
                <p> Small-to-Medium Business</p>
                <p className="ml-[-3.5rem]" >Enterprise</p>
                <p className="ml-[6.5rem]" >more</p>
            </div>
        <div className="flex lg:flex-row flex-col  gap-24 m-2 ml-10 font-normal">
             <p className=" lg:hidden font-bold mb-[-5rem] text-lg">Small-to-Medium Business</p>
             <div className="grid grid-cols-2 lg:gap-20 gap-10 border-t pt-2 border-slate-400 ">
                <div className="pre-p font-medium ">
                    <p>Introduction</p>
                    <p>Getting Started</p>
                </div>
                <div className="pre-p">
                    <p className="font-medium">All Solutions</p>
                    <p>Accept Payments</p>
                    <p>Make Payments</p>
                    <p>Manage Risk</p>
                    <p>Accelerate Growth</p>
                    <p>Streamline Operations</p>
                </div>
            </div>
            <p className=" lg:hidden font-bold mb-[-5rem] text-lg">Enterprise</p>

            <div className="grid grid-cols-2 lg:gap-20 gap-10 border-t pt-2 border-slate-400">
                
                <div className="pre-p font-medium">
                    <p>Introduction</p>
                    <p>Marketplaces & Parters</p>
                </div>
                <div className="pre-p">
                    <p className="font-medium">Platform Solutions</p>
                    <p>Accept Payments</p>
                    <p>Make Payments</p>
                    <p>Manage Risk</p>
                    <p>Accelerate Growth</p>
                    <p>Streamline Operations</p>
                </div>
            </div>
            <p className=" lg:hidden font-bold mb-[-5rem] text-lg">More</p>
            <div>
                <div className="pre-p font-medium border-t pt-2 border-slate-400">
                    <p>NonProfits</p>
                    <p>Pricing</p>
                    <p>Resourse Center</p>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Prefooter