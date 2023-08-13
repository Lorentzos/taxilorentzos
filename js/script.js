function hideElements() {
    // Hide all text elements
    var textElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6');
    textElements.forEach(function(element) {
      element.style.display = 'none';
    });
  
    // Hide all image elements
    var imageElements = document.querySelectorAll('img');
    imageElements.forEach(function(element) {
      element.style.display = 'none';
    });
  }
  
  function showElements() {
    // Show all text elements
    var textElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6');
    textElements.forEach(function(element) {
      element.style.display = 'block';
    });
  
    // Show all image elements
    var imageElements = document.querySelectorAll('img');
    imageElements.forEach(function(element) {
      element.style.display = 'block';
    });
  }
  
  
  function showLoader() {
    // Hide the elements
    hideElements();
  
    // Show the spinner animation and the dark overlay
    document.querySelector('.spinner-container').style.display = 'flex';
    document.querySelector('.dark-overlay').style.display = 'block';
  
    // Load the site files after the animation finishes
    setTimeout(function() {
      // Unhide the elements
      showElements();
  
      // Dynamically create a <script> element to load the site files
      var script = document.createElement('script');
      script.src = 'js/script.js'; // Replace with the path to your site files JavaScript file
      script.onload = function() {
        // Hide the spinner and remove the dark overlay
        document.querySelector('.spinner-container').style.display = 'none';
        document.querySelector('.dark-overlay').style.display = 'none';
  
        // Show the page content
        document.querySelector('.page-content').style.display = 'block';
      };
  
      // Append the <script> element to the document body
      document.body.appendChild(script);
    }, 500); // Delay loading the site files for 2 seconds
  }
  
  // Call the showLoader function when the page finishes loading
  window.addEventListener('load', showLoader);