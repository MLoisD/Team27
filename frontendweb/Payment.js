
import React, { useState, useEffect ,useContext } from "react";
import { ShopContext } from "./context/shop-context";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./basket.css";
import Books from "./components/books/Books";


export default function Payment() {



  const [customer, setCustomer]=useState({
    fullname:"",
    useremail:"",
    phone:"",
    country:"",
    address:""
  })

   const {fullname,useremail,phone,country,address}=customer

  const onInputChange=(e)=>{
    setCustomer({...customer,[e.target.name]:e.target.value});
  };
  const onSubmit= async (e) => {
    e.preventDefault();
    await axios.post("/api/v1/customers", customer)
    navigate("/")
  }

const [shipping ,setShipping] = useState("Standard")
const onOptionChange = e => {
  setShipping(e.target.value)
}


// const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
// const totalAmount = getTotalCartAmount();


const [book,setBooks] = useState({
  bname:"",
  author:"",
  genre:"",
  description:"",
  price:"",
  stock:""

});

const { id, value }= useParams();

useEffect(() => {
  loadBooks();

}, []);

const loadBooks= async () => {
  const result = await axios.get(`/api/v1/books/${id}`);
  setBooks(result.data);
};


const navigate = useNavigate();


return ( 

<div className="leftcolumn">
<div className="container">
<Link type="button" className="btn" id="next" to={`/basket/${book.id}`}>back </Link>
  <div className="progress-container">
      <div className="progress" id="progress"></div>
      <div className="circle">Cart</div>
      <div className="circle active">Payment</div>
      <div className="circle">Review</div>
  
   </div>
</div>




    <div className="row">
    <div className="leftcolumn">
    <form onSubmit={(e)=>onSubmit(e)}>
      <div className="payment-form">
      
        <h1>Billing Details</h1>
       
            <div className="payment-details">
                <div className="input-box">
                  <label htmlFor="fname">Full Name *</label>
                </div>
                <div className="input-detail">
                <input
                  type={"text"} 
                  placeholder="Enter your full name"
                  name="fullname"
                  value={fullname}
                  onChange={(e)=>onInputChange(e)}
                   required />
                    
                </div><br></br>
                <div className="input-box">
                  <label htmlFor="Email">Email *</label>
                </div>
                <div className="input-detail">
                <input
                  type={"text"} 
                  placeholder="Enter your email"
                  name="useremail"
                  value={useremail}
                  onChange={(e)=>onInputChange(e)}
                  required />
                </div>
                <div className="input-box">
                  <label htmlFor="Country"> Country</label>
                </div>
                <div className="input-detail">
                <input
                  type={"text"} 
                  placeholder="Enter your Country"
                  name="country"
                  value={country} 
                  onChange={(e)=>onInputChange(e)}
                  required />
                </div>
                <div className="input-box">
                  <label htmlFor="Address"> Address*</label>
                </div>
                <div className="input-detail">
                <input
                  type={"text"} 
                  placeholder="Enter your Address"
                  name="address"
                  value={address} 
                  onChange={(e)=>onInputChange(e)}
                  required />
                </div>
                <div className="input-box">
                  <label htmlFor="phone">Phone number *</label>
                </div>
                <div className="input-detail">
                <input
                  type={"text"} 
                  placeholder="Enter your phone number"
                  name="phone"
                  value={phone} 
                  onChange={(e)=>onInputChange(e)}
                  required />
                </div>
                <div className="input-detail">
              <input type="radio" id="1stclass" name="shippingvia" value="Firstclass"
              checked={shipping === "Firstclass"}
              onChange={onOptionChange}
              required
              />
              <label htmlFor="1stclass">1st class: £4.99</label><br></br>
              <input type="radio" id="standard" name="shippingvia" value="Standard"
              checked={shipping === "Standard"}
              onChange={onOptionChange}
              required
              />
              <label htmlFor="standard">Standard shipping: £2.99</label><br></br>
              <input type="radio" id="international" name="shippingvia" value="International"
                checked={shipping === "International"}
                onChange={onOptionChange}
                required
              />
              <label htmlFor="international">International shipping: £5.99</label>
                </div>
            </div>
          </div>
          <h2>Card details</h2>
              <div className="payment-details">
                <label htmlFor="cname">Name on Card</label>
                <input type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
                <label htmlFor="ccnum"><h1>hello</h1></label>
                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
                <label htmlFor="expmonth">Exp Month</label>
                <input type="text" id="expmonth" name="expmonth" placeholder="September"></input>
            
              <div className="col-50">
                <label htmlFor="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"></input>
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"></input>
              </div>
          </div>
        
          <Link type="button" className="btn btn-outline-danger mx-3" to={`/basket/${book.id}/${value}/review`}>Submit </Link>
          

                <Link type="button" className="btn btn-outline-danger mx-3" to={`/basket/${book.id}`}>Cancel </Link>
      </form>
     
    </div>
  </div>

  </div>



);
}