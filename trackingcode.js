

const trackingData = {
    "ZAF0050738911": {
        trackingNumber: "ZAF0050738911",
        name: "Luvo babi",
        country: "south africa",
        city: "LIMPOPO",
        addres: "112 Ngwaabe, Ga masha",
        shipmentstatus: "IN Transit",
        shippingdate: "2025-11-15",
        deliverytime: "2025-11-18 08:41:21 AM"
    },
    
    "ZAF005073891111": {
        trackingNumber: "ZAF005073891111",
        name: "Malusi",
        country: "south africa",
        city: "palm springs",
        addres: "palm springs honeysuckle streets",
        shipmentstatus: "Arrived (Pending Clearance)",
        shippingdate: "2025-11-15",
        deliverytime: "2025-11-18 08:41:21 AM"
    },

        "ZAF0050738911123": {
        trackingNumber: "ZAF0050738911123",
        name: "Siphamandla Tsobo",
        country: "south africa",
        city: "western cape",
        addres: "western cape, cape town",
        shipmentstatus: " IN Transit",
        shippingdate: "2025-11-15",
        deliverytime: "2025-11-18 08:41:21 AM"
    },
            "ZAF0050738911124": {
        trackingNumber: "ZAF0050738911124",
        name: "Vuyokazi Maqhula",
        country: "south africa",
        city: "Cape Town",
        addres: "Jip de jager protea hotel durbanville",
        shipmentstatus: "Arrived (Pending Clearance)",
        shippingdate: "2025-11-15",
        deliverytime: "2025-11-18 08:41:21 AM"
    },
     "ZAF005073891156": {
        trackingNumber: "ZAF005073891156",
        name: "Takudzwa Murambinda",
        country: "south africa",
        city: "Eastern Cape, East London",
        addres: "Mdantsane unit 3 House number: 8013",
        shipmentstatus: "Arrived (Pending Clearance)",
        shippingdate: "2025-11-8",
        deliverytime: "2025-11-13 08:41:21 AM"
    },

       "ZAF00507389116": {
        trackingNumber: "ZAF00507389116",
        name: "Thapelo August Phanyane",
        country: "south africa",
        city: "Mpumalanga",
        addres: "Mbibane, nkangalala",
        shipmentstatus: "Arrived (Pending Clearance)",
        shippingdate: "2025-010-28",
        deliverytime: "2025-11-1 08:41:21 AM"
    },

           "ZAF0050738954": {
        trackingNumber: "ZAF0050738954",
        name: "Kabelo photo",
        country: "south africa",
        city: "ekhuruleni",
        addres: "house number: 8562 john dube street zone 8 winnie mandela tembisa",
        shipmentstatus: "Arrived (Pending Clearance)",
        shippingdate: "2025-11-10",
        deliverytime: "2025-11-13 08:41:21 AM"
    },
              "ZAF00507389545": {
        trackingNumber: "ZAF00507389545",
        name: "Mpho mashabane",
        country: "south africa",
        city: "south africa",
        addres: "Cottondale clinic main road to manyeleti",
        shipmentstatus: "Arrived (Pending Clearance)",
        shippingdate: "2025-11-11",
        deliverytime: "2025-11-14 08:41:21 AM"
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




















