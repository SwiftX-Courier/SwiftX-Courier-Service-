

const trackingData = {
    "ZAF0050738911": {
        trackingNumber: "ZAF0050738911",
        name: "Xolani Shoba",
        country: "south africa",
        city: "Pietermaritzburg",
        addres: "15 chatterton road",
        shipmentstatus: "IN Transit",
        shippingdate: "2025-010-10",
        deliverytime: "2025-010-13 08:41:21 AM"
    },
    "ZAF005073892": {
        trackingNumber: "ZAF005073892",
        name: "Luvo mto",
        country: "south africa",
        city: "Eastern Cape, Alexandria",
        addres: "2463 fondini street",
        shipmentstatus: "IN Transit",
        shippingdate: "2025-010-10",
        deliverytime: "2025-010-13 08:41:21 AM"
    },
    "ZAF005073893": {
        trackingNumber: "ZAF005073893",
        name: "Zakhele",
        country: "eSwantini",
        city: "Mskato street, Mbabane",
        addres: "Embassy house, Grand floor suit of offices east wing",
        shipmentstatus: "IN Transit",
        shippingdate: "2025-010-10",
        deliverytime: "2025-010-13 08:41:21 AM"
    },

       "ZAF005073894": {
        trackingNumber: "ZAF005073894",
        name: "Enkosi Macamba",
        country: "south africa",
        city: "western cape, cape town",
        addres: "143 Sir Lowry RD, Foreshore",
        shipmentstatus: "IN Transit",
        shippingdate: "2025-010-10",
        deliverytime: "2025-010-13 08:41:21 AM"
    },

           "ZAF005073895": {
        trackingNumber: "ZAF005073895",
        name: "Lonwabo zilwa",
        country: "south africa",
        city: "port elizabeth",
        addres: "port elizabeth, 6001",
        shipmentstatus: "IN Transit",
        shippingdate: "2025-010-11",
        deliverytime: "2025-010-13 08:41:21 AM"
    },
    };

    const params = new URLSearchParams(window.location.search);

    const trackingNumber = params.get("tracking");

    const customer = trackingData[trackingNumber];

    const detailsDiv = document.getElementById("details");

    if (customer) {
        detailsDiv.innerHTML = `


        <div class="shipment-header">
 <div>
    <img src="location.png" alt="">
    <p>${customer.shipmentstatus}</p>
</div> 

 <div>
    Tracking Number: ${customer.trackingNumber}
</div> 
 <div>

<a href ="shipment-receipt.html"> <button>
    Print Shipment
</button></a>
</div> 
 
</div>






<div class="collection">
        <div class="Recipient-box">
            <p>
                Sender/Orgin
            </p>
           
        </div>
        <div class="city-box">
            <p class="city">
                <img src="location.png" alt="">  City Collection
            </p>
         
            <p>
                united states
            </p>
            <hr class="hr">
        </div>
        <div class="city-box">
            <p class="city">
             <img src="location.png" alt="">   Orgin City
            </p>
            
            <p>
                Texas
            </p>
            <hr class="hr">
        </div>
        <br>
        <div class="city-box">
            <p class="city">
             <img src="calendar.png" alt="">   Shipping Date
            </p>
            ${customer.shippingdate}
            <p>
                
            </p>
            <hr class="hr">
        </div>
        <div class="city-box">
            <p class="city">
              <img src="clock.png" alt="">  Shipping-Time
            </p>
           
            <p>
                1-3 days
            </p>
            <hr class="hr">
        </div>
        <div class="city-box">
            <p class="city">
               Shipping-Quantity
            </p>
            
            <p>
              1
            </p>
            <hr class="hr">
        </div>
        <div class="city-box">
            <p class="city">
             Total-weight {lbs}
            </p>
            
            <p>
              6
            </p>
            <hr class="hr">
        </div>

    </div>


     <div style="margin-top: 80px;" class="collection">
         <div style="width: 100%;"  class="Recipient-box"> 
            <p  class="Recipient">
              Shipping History
            </p>
        </div>
<div>
         <div class="city-box">
            <p class="city">
                
            </p>
         
            <p>
              Approved
            </p>
              
            <div>
                03:47:21 pm
            </div>       
        </div>
        <hr>
        <div class="city-box">
            <p class="city">
          
            </p>
            
            <p>
                ${customer.shipmentstatus}
            </p>
          
            
            <div>
                12:12:45 pm
            </div>
        </div>
        <hr>
        <br>
        <div  class="city-box">
            <p class="city">

            </p>
            
            <p>
               ${customer.shipmentstatus}
            </p>
          
            <div>
                01:01:24 pm
            </div>
        </div>
    </div>
    </div>





 <div id="details" style="margin-top: 80px;" class="collection">
        <div class="Recipient-box">
            <p class="Recipient">
                Recipient/destination
            </p>
        </div>

        <div class="city-box">
            <p class="city">
                <img src="location.png" alt=""> Delivery City 
            </p>
            <p>
                ${customer.city}
            </p>
            <hr class="hr">
        </div>
        <div class="city-box">
            <p class="city">
             <img src="location.png" alt="">  Destination City
            </p>
            
            <p>
               ${customer.city}
            </p>
            <hr class="hr">
        </div>
        <br>
        <div class="city-box">
            <p class="city">
             <img src="calendar.png" alt="">  Delivery time
            </p>
            
            <p>
                ${customer.deliverytime}
            </p>
            <hr class="hr">
        </div>
        <div class="city-box">
            <p class="city">
              <img src="clock.png" alt="">  Shipping-Time
            </p>
            
            <p>
                1-3 days
            </p>
            <hr class="hr">
        </div>
        <div class="city-box">
            <p class="city">
               Contact Name
            </p>
            
            <p>
             ${customer.name}
            </p>
            <hr class="hr">
        </div>
        <div class="city-box">
            <p class="city">
           Address
            </p>
            
            <p>
              ${customer.addres}
            </p>
            <hr class="hr">
        </div>
        `
    } else {
        detailsDiv.innerHTML = `
        <p 
        style="color:red;">Invalid or Missing tracking number.</p>
        </div>













      
        
       
        

       
        `
    }







