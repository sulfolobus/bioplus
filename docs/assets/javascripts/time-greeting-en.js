document.addEventListener("DOMContentLoaded", function() {
  const greetingElement = document.getElementById("time-greeting");
  if (!greetingElement) return;

  const hour = new Date().getHours();
  let greeting = "";
  let icon = "";

  if (hour >= 5 && hour < 12) {
    greeting = "Good morning";
    icon = "🌅";
  } else if (hour >= 12 && hour < 14) {
    greeting = "Good noon";
    icon = "☀️";
  } else if (hour >= 14 && hour < 18) {
    greeting = "Good afternoon";
    icon = "🌤️";
  } else if (hour >= 18 && hour < 22) {
    greeting = "Good evening";
    icon = "🌙";
  } else {
    greeting = "Late night";
    icon = "🌃";
  }

  greetingElement.innerHTML = icon + " " + greeting + ", welcome to BioPlus!";
});
