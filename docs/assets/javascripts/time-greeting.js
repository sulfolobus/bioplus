document.addEventListener("DOMContentLoaded", function() {
  const greetingElement = document.getElementById("time-greeting");
  if (!greetingElement) return;

  const hour = new Date().getHours();
  let greeting = "";
  let icon = "";

  if (hour >= 5 && hour < 12) {
    greeting = "早上好";
    icon = "🌅";
  } else if (hour >= 12 && hour < 14) {
    greeting = "中午好";
    icon = "☀️";
  } else if (hour >= 14 && hour < 18) {
    greeting = "下午好";
    icon = "🌤️";
  } else if (hour >= 18 && hour < 22) {
    greeting = "晚上好";
    icon = "🌙";
  } else {
    greeting = "夜深了";
    icon = "🌃";
  }

  greetingElement.innerHTML = icon + " " + greeting + "，欢迎来到 BioPlus！";
});
