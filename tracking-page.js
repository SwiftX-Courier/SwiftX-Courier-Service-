const validTrackingNumber = [
    "ZAF00507389113",
     "ZAF005073892",
     "ZAF005073893",
     "ZAF005073894",
     "ZAF005073894",
    "ZAF005073895"
    
    
   
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






