document.addEventListener("DOMContentLoaded", function() {
  var greetingElement = document.getElementById("greeting");
  if (!greetingElement) return;

  var hour = new Date().getHours();
  var greeting = "早上好";

  if (hour >= 5 && hour < 12) {
    greeting = "早上好";
  } else if (hour >= 12 && hour < 14) {
    greeting = "中午好";
  } else if (hour >= 14 && hour < 18) {
    greeting = "下午好";
  } else if (hour >= 18 && hour < 22) {
    greeting = "晚上好";
  } else {
    greeting = "夜深了";
  }

  greetingElement.textContent = greeting;
});
