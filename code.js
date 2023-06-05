//jQuery hover effects (changing icon to fill and back)
$("button").before(function(){
    $("i").addClass("bi-camera-video");
  });

$("button").hover(function(){
    $("i").removeClass("bi-camera-video");
    $("i").addClass("bi-camera-video-fill");
  });

$("button").mouseleave(function(){
    $("i").removeClass("bi-camera-video-fill");
    $("i").addClass("bi-camera-video");
  });