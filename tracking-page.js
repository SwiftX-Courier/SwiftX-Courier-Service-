const validTrackingNumber = [
    "ZAF00507389113",
    "ZAF0050738911",
    "ZAF005073891111",
    "ZAF0050738911123",
    "ZAF0050738911124",
  
     "ZAF00507389114",
     "ZAF00507389115",
     "ZAF00507389116",
     "ZAF005073894",
    "ZAF005073895",
    "ZAF005073891156",
    "ZAF0050738954",
    "ZAF00507389545"
    
    
   
];

document.getElementById("trackingForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.getElementById("trackingNumber").value.trim().toUpperCase();
    const errorMsg = document.getElementById("error");
    if (validTrackingNumber.includes(input)) {
        errorMsg.textContent="";
        window.location.href = `
        trackingcode.html?tracking=${input}
        `;
    }
     else {
          errorMsg.textContent = "Invalid tracking number. Please try again";
        }

});













