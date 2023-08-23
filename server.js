// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Select the target element
  const targetElement = document.querySelector("#home > div > div > div.content > p:nth-child(4)");
  
  // Check if the target element is found
  if (targetElement) {
    // Change the text content of the element
    targetElement.textContent = "34223432";
  } else {
    console.error("Target element not found.");
  }
});
