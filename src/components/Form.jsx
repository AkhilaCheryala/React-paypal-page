const Form = () => {
    return (
      <div>
        <form className="sm:w-1/3 border border-slate-400 m-4 flex flex-col gap-6 p-6 absolute shadow-lg shadow-slate-600 rounded-lg right-3.5 top-60 ">
          <h2 className="text-2xl text-blue-900 font-bold ">Get Started</h2>
          <p> Tell us a little about your business so we can connect you with the right people.</p>
          <input type="text" name="firstname" placeholder="First name*" />
          <input type="text" name="lastname" placeholder="Last name*" />
          <input type="email" name="email" placeholder="Work email*" />
          <input type="number" name="mobile" placeholder="Phone number*" />
          <input type="text" name="company" placeholder="Company name*" />
          <input type="text" name="companyurl" placeholder="Company website*" />
          <select name="Country" >
         <option value="" disabled selected>Country*</option>
            <option value={'us'}>United States</option>
            <option value={'india'}>India</option>
            <option value={'Japan'}>Japan</option>
            <option value={'China'}>China</option>
            <option value={'Russia'}>Russia</option>
          </select>
          <select name="sales">
          <option value="" disabled selected>Estimated Annual Sales*</option>
            <option value={'one'}>Less than $100,000</option>
            <option value={"two"}>$100,000-$500,000</option>
            <option value={'three'}>$500,000-$1,000,000</option>
            <option value={'four'}>More than $1,000,000</option>
          </select>
          <select name="question">
          <option value="" disabled selected>Do you have a payPal Business Account?*</option>
            <option value={'yes'}>Yes</option>
            <option value={'No'}>No</option>
          </select>
          <label>
            <input type="checkbox" className="mr-2 p-2" />I have read and accepted the <a href="/" className="text-blue-900 font-semibold underline"> PayPal Privacy Policy</a>
          </label>
          <p className="text-sm">I consent to PayPal contacting me by phone or by email, and to sending me product
             or industry information relevant to my query. I know I can unsubscribe at any time.</p>
  
          <button type="submit" className="bg-blue-900 text-white rounded-3xl  p-2 w-1/2 mx-auto hover:bg-blue-700">Submit</button>
          <p className="text-center">*Required fields</p>
        </form>
      </div>
    );
  }
  
  export default Form;
  