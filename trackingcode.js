

const trackingData = {
    "ZAF0050738911": {
        trackingNumber: "ZAF0050738911",
        name: "Anesh Marks",
        country: "south africa",
        city: "Eastern Cape",
        addres: "Middleburg, midros, 5900",
        shipmentstatus: " IN Transit",
        shippingdate: "2026-1-25",
        deliverytime: "2026-1-26 08:41:21 AM"
    },
    
    "ZAF005073891111": {
        trackingNumber: "ZAF005073891111",
        name: "Kenneth Khubisa",
        country: "south africa",
        city: "amanzimtoti west street ",
        addres: "amanzimtoti west street",
        shipmentstatus: "IN Transit",
        shippingdate: "2026-1-20",
        deliverytime: "2026-1-25 08:41:21 AM"
    },

        "ZAF0050738911123": {
        trackingNumber: "ZAF0050738911123",
        name: "Glen Hlayisani Ngobeni",
        country: "south africa",
        city: "Cape town, western cape",
        addres: "western cape town",
        shipmentstatus: "IN Transit",
        shippingdate: "2026-1-13",
        deliverytime: "2026-1-15 08:41:21 AM"
    },
            "ZAF0050738911124": {
        trackingNumber: "ZAF0050738911124",
        name: "Apiwe Adonisi",
        country: "south africa",
        city: "92 Cork tree road",
        addres: "Thubelitsha Delft south, post addressn7100",
        shipmentstatus: "IN Transit",
        shippingdate: "2026-1-20",
        deliverytime: "2026-1-25 08:41:21 AM"
    },
     "ZAF005073891156": {
        trackingNumber: "ZAF005073891156",
        name: "donkoehok",
        country: "south africa",
        city: "free state",
        addres: "Boshof",
        shipmentstatus: "IN Transit",
        shippingdate: "2026-1-25",
        deliverytime: "2026-1-25 08:41:21 AM"
    },

       "ZAF00507389116": {
        trackingNumber: "ZAF00507389116",
        name: "Niniwe Makhura",
        country: "south africa",
        city: "Moholo street",
        addres: "1033 MM M amelodi east pretoria ",
        shipmentstatus: "IN Transit",
        shippingdate: "2026-1-20",
        deliverytime: "2026-1-25 08:41:21 AM"
    },

           "ZAF0050738954": {
        trackingNumber: "ZAF0050738954",
        name: "Xolile Berent Ditalame ",
        country: "south africa",
        city: "Free State, Bultfontein, Phahameng",
        addres: "5272 Moses Mabida street Phameng Bultfontein",
        shipmentstatus: "IN Transit",
        shippingdate: "2026-1-24",
        deliverytime: "2026-1-27 08:41:21 AM"
    },
              "ZAF00507389545": {
        trackingNumber: "ZAF00507389545",
        name: "Sinoxolo",
        country: "south africa",
        city: "Eastern cape",
        addres: "King williams Town 5600 12 Alice Street",
        shipmentstatus: "IN Transit",
        shippingdate: "2026-1-24",
        deliverytime: "2026-1-26 08:41:21 AM"
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





































