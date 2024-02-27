
// Learn More Button
$("#learn-more").click(function() {
  window.scrollTo({top: window.scrollY = 758, behavior: 'smooth'});
});
// document.getElementById("learn-more").addEventListener("click", function() {window.scrollTo({top: window.scrollY = 1000, behavior: 'smooth'});});

// Resume Button
$("#resume").click(function() {
  window.location.href = "./public/resume.html";
});
// document.getElementById("resume").addEventListener("click", function() {window.location.href = "./public/resume.html";});

// Contact Me Button
$("#contactme").click(function() {
  window.location.href = "mailto:darkestmedium@pm.me";
});
// document.getElementById("contactme").addEventListener("click", function() {window.location.href = "mailto:darkestmedium@pm.me";});