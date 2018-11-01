var indx = 1;
imgCount(indx);

function next(n) {
  imgCount(indx += n);
}

function imgCount(n) {
  var i;
  var pics = document.getElementsByClassName("shot");
  if (n > pics.length) {indx = 1}
  if (n < 1) {indx = pics.length}
  for (i = 0; i < pics.length; i++) {
    pics[i].style.display = "none";
  }
  pics[indx-1].style.display = "block";
}
