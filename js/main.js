let count = 1;
let sentidoCrescente = true;
document.getElementById('radio1').checked = true;

setInterval(function () {
  nextImage();
  console.log(count);
}, 3000);

function nextImage() {
  if (sentidoCrescente) {
    count++;
  } else {
    count--;
  }

  if (count > 4) {
    count = 3;
    sentidoCrescente = false;
  }

  if (count == 1) {
    sentidoCrescente = true;
  }
  document.getElementById('radio' + count).checked = true;
}
