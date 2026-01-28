function goToPhase(num) {
  document.querySelectorAll('.phase').forEach(p => p.classList.add('hidden'));
  document.getElementById('phase' + num).classList.remove('hidden');
}

function answerYes() {
  goToPhase(3);
  showPhotos();

  setTimeout(() => {
    goToPhase(5);
    showBouquet();
  }, 5000);
}

/* PHOTOS (JPG) */
function showPhotos() {
  const photosDiv = document.getElementById('photos');
  photosDiv.innerHTML = '';

  const photos = ['photo1.jpg', 'photo2.jpg'];

  photos.forEach(photo => {
    const img = document.createElement('img');
    img.src = 'images/' + photo;
    photosDiv.appendChild(img);
  });
}

/* FLOWERS AUTO-GENERATED */
function createFlowers() {
  const container = document.querySelector('.flowers');
  setInterval(() => {
    const flower = document.createElement('span');
    flower.innerText = '🌸';
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = (3 + Math.random() * 3) + 's';
    container.appendChild(flower);

    setTimeout(() => flower.remove(), 6000);
  }, 300);
}

/* BOUQUET */
function showBouquet() {
  const bouquet = document.getElementById('bouquet');
  bouquet.innerHTML = '';

  for (let i = 0; i < 6; i++) {
    const flower = document.createElement('span');
    flower.innerText = '💐';
    bouquet.appendChild(flower);
  }
}

/* START FLOWERS ON LOAD */
createFlowers();
