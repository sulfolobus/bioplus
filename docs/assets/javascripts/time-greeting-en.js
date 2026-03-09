document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var greetingElement = document.getElementById("time-greeting");
    if (!greetingElement) return;

    var hour = new Date().getHours();
    var greeting = "";

    if (hour >= 5 && hour < 12) {
      greeting = greetingElement.getAttribute("data-morning");
    } else if (hour >= 12 && hour < 14) {
      greeting = greetingElement.getAttribute("data-noon");
    } else if (hour >= 14 && hour < 18) {
      greeting = greetingElement.getAttribute("data-afternoon");
    } else if (hour >= 18 && hour < 22) {
      greeting = greetingElement.getAttribute("data-evening");
    } else {
      greeting = greetingElement.getAttribute("data-night");
    }

    if (greeting) {
      greetingElement.textContent = greeting;
    }
  }, 100);
});
