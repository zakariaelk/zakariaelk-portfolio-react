export default function DynamicWelcome() {
  const dynamicWelcome = document.querySelector(".dynamic-welcome span");
  const today = new Date();
  const time = today.getHours();

  if (dynamicWelcome) {
    if (time > 6 && time < 12) {
      dynamicWelcome.innerHTML = "How's your day starting?";
    } else if (time >= 12 && time < 17) {
      dynamicWelcome.innerHTML = "Having a nice afternoon?";
    } else {
      dynamicWelcome.innerHTML = "Having a good evening?";
    }
  }
}
