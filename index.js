
// Learn More Button
$("#btn-learn-more").click(function() {
  window.scrollTo({top: window.scrollY = 758, behavior: 'smooth'});
});

// Resume Button
$("#btn-resume").click(function() {
  window.location.href = "./public/resume.html";
  // $("#page-main").hide(100);
  // $("#page-resume").show(100);
  // window.scrollTo({top: window.scrollY = 0, behavior: 'smooth'});

});

// Back to main
// $("#btn-back-to-main").click(function() {
//   window.location.href = "./index.html";
//   $("#page-main").show(100);
//   $("#page-resume").hide(100);
//   window.scrollTo({top: window.scrollY = 758, behavior: 'smooth'});
// });

// Contact Me Button
$("#btn-contact-me").click(function() {
  window.location.href = "mailto:darkestmedium@pm.me";
});



