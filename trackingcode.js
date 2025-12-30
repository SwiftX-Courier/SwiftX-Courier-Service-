

const trackingData = {
    "ZAF0050738911": {
        trackingNumber: "ZAF0050738911",
        name: "Ayanda mtembu",
        country: "south africa",
        city: "Umlazi, Durban",
        addres: "N708 Masakhane road",
        shipmentstatus: " IN Transit",
        shippingdate: "2025-12-14",
        deliverytime: "2025-12-17 08:41:21 AM"
    },
    
    "ZAF005073891111": {
        trackingNumber: "ZAF005073891111",
        name: "Ndabezitha",
        country: "south africa",
        city: "Ndabezitha road,Durban ",
        addres: "Ndabezitha road,Durban ",
        shipmentstatus: "IN Transit",
        shippingdate: "2025-12-27",
        deliverytime: "2025-12-31 08:41:21 AM"
    },

        "ZAF0050738911123": {
        trackingNumber: "ZAF0050738911123",
        name: "Aobakwe Maratswane",
        country: "Botswana",
        city: "Gaborone, Botswana",
        addres: "P.O Box 10272, Gaborone",
        shipmentstatus: "IN Transit",
        shippingdate: "2025-12-14",
        deliverytime: "2025-12-17 08:41:21 AM"
    },
            "ZAF0050738911124": {
        trackingNumber: "ZAF0050738911124",
        name: "Fred junior",
        country: "south africa",
        city: "johannesburg",
        addres: "johannesburg",
        shipmentstatus: "IN Transit",
        shippingdate: "2025-12-14",
        deliverytime: "2025-12-17 08:41:21 AM"
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
        name: "Thulani Booi ",
        country: "south africa",
        city: "Eastern Cape",
        addres: "N0. 10 independence Avenue Bhiso high court",
        shipmentstatus: "IN Transit",
        shippingdate: "2025-12-06",
        deliverytime: "2025-12-09 08:41:21 AM"
    },
              "ZAF00507389545": {
        trackingNumber: "ZAF00507389545",
        name: "Junior Sibusiso Masilela",
        country: "south africa",
        city: "Mpumalanga, Barberton",
        addres: "Mpumalanga, Barberton 1300",
        shipmentstatus: "IN Transit",
        shippingdate: "2025-11-04",
        deliverytime: "2025-12-08 08:41:21 AM"
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































