$(document).ready(function() {
  $('.chart').easyPieChart({
    scaleColor: "rgb(210, 112, 148)",
    lineWidth: 20,
    lineCap: 'butt',
    barColor: 'rgb(210, 112, 148)',
    trackColor:	"#ecf0f1",
    size: 160,
    animate: 500
  });
});





$(document).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll >= 780) {
        
      $("#menu").addClass("fixed");
    } else {
       $("#menu").removeClass("fixed");
    }
});