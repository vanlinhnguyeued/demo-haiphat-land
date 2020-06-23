export function topFunction() {
  let currentYOffset = self.pageYOffset;
  let initYOffset = currentYOffset;
  var classStick = document.getElementsByClassName("sticky");
  classStick[0].style.display = "inherit";
  var intervalId = setInterval(function () {
    currentYOffset -= initYOffset * 0.03;
    document.body.scrollTop = currentYOffset;
    document.documentElement.scrollTop = currentYOffset;

    if (self.pageYOffset == 0) {
      clearInterval(intervalId);
    }
  }, 10);
}
