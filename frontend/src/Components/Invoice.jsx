import React from 'react'
import '../Components/Invoice.css'
import logo from "../Images/emt_logo.jpg"
const Invoice = () => {
  return (
    <div style={{width:"70vw",margin:"auto",padding:"20px",border:"3px dotted red",boxSizing:"border-box"}}>
    <div className='header'>
        <div className='heading'>TAX INVOICE</div>
       
    </div>
    <div className='companyDetails'>

        <div>
            <img src={logo} alt="" /> <br />
            <strong>Ease my transport</strong>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consectetur neque assumenda voluptatibus quos laborum saepe a minima totam.</p>
           
        </div>
        <div>
            <p>State GSTIN: 23AACJS1243F1ZR</p>
            <p>SAC Code: 999799</p>
            <p>Sarvice Tax Category: Business Auxiliary Service</p>
            
        </div>
    </div>
    <div className='invoiceDetails'>
       
        <div>
            <span>Invoice ID CFASDFADF1344</span>
        </div>
        <div>
            <span>Invoice Date 24/06/2023</span>
        </div>
    </div> <hr />
    <div className='invoiceDetails'>
       
      
           <span>Customer Name Manish</span>
      
           <span>Moblie Number 999245698</span>
      
   </div> <hr />
     <div className='invoiceDetails'>
       
     
           <span>Load ID: FAFJ23234</span>
      
           <span>Booking ID: ADFA245</span>
      
   </div> <hr />
   <div className='invoiceDetails'>
       
     
       <span>Origin: PUNE</span>
  
       <span>Destination: DELHI</span>
  
</div> <hr />
   <div>
   <div className='billHeading'>
    <strong>Description</strong>
    <strong>Amount (INR)</strong>
   </div> 
   <div className='billDetails'>
    <span>Load Post Charges </span>
    <span>₹330.66</span>
   </div> 
   <div className='billDetails'>
    <span>Convenience Fee </span>
    <span>₹33.66</span>
   </div> 
   <div className='billDetails'>
    <span>CGST <br /> 9.0%</span>
    <span>₹0.66</span>
   </div> 
   <div className='billDetails'>
    <span>SGST <br />9.0%</span>
    <span>₹0.47</span>
   </div> 
   </div>
   <hr />
   <div className='invoiceDetails'>
           <span>Total</span>
       
           <span>₹40.27</span>
   </div> <hr />
   <div className='note'>
    <span>Please Note:</span>
    <ol>
        <li>This is a electronically generated invoice and done not require a digital signature.</li>
        <li>Vide Circular No. 146/02/2021 - GST dated 23rd February 2021, Printing of Dynamic QR code is not mandatory in case of Prepaid invoice since cross referene of payment is available.</li>
    </ol>
   </div>
    </div>
   
     
     
       
  )
}

export default Invoice