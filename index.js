
// Learn More Button
$("#learn-more").click(function() {
  window.scrollTo({top: window.scrollY = 758, behavior: 'smooth'});
});

// Resume Button
$("#resume").click(function() {
  $("#page-main").hide(100);
  $("#page-resume").show(100);
  window.scrollTo({top: window.scrollY = 0, behavior: 'smooth'});

});

// Back to main
$("#back-to-main").click(function() {
  $("#page-main").show(100);
  $("#page-resume").hide(100);
  window.scrollTo({top: window.scrollY = 758, behavior: 'smooth'});
  
});

// Contact Me Button
$("#contactme").click(function() {
  window.location.href = "mailto:darkestmedium@pm.me";
});



