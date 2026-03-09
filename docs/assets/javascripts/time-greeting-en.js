document.addEventListener("DOMContentLoaded", function() {
  const greetingElement = document.getElementById("time-greeting");
  if (!greetingElement) return;

  const hour = new Date().getHours();
  let greeting = "";

  if (hour >= 5 && hour < 12) {
    greeting = "Good morning";
  } else if (hour >= 12 && hour < 14) {
    greeting = "Good noon";
  } else if (hour >= 14 && hour < 18) {
    greeting = "Good afternoon";
  } else if (hour >= 18 && hour < 22) {
    greeting = "Good evening";
  } else {
    greeting = "Late night";
  }

  greetingElement.textContent = greeting;
});
