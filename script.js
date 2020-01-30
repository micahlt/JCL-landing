window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 85%)";
    document.getElementById("navbar").style.boxShadow = "black 0 0 5px";
    document.getElementById("navHeader").style.opacity = "1";
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0%)";
    document.getElementById("navbar").style.boxShadow = "black 0 0 0px";
    document.getElementById("navHeader").style.opacity = "0";
  }
}