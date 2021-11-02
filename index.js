const ham = $(".ham");
var isHam = false;

ham.click(() => {
  if (!isHam) {
    $("nav").addClass("responsive");
    ham.css("opacity", "0.5");
    isHam = true;
  } else {
    $("nav").removeClass("responsive");
    ham.css("opacity", "1");
    isHam = false;
  }
});
