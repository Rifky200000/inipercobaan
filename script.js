const photos = ["img/img1.jpeg", "img/img3.jpeg", "img/img2.jpeg"];
let index = 0;

function changePhoto() {
    index = (index + 1) % photos.length;
    document.getElementById("photo").src = photos[index];
}

// Ganti foto otomatis setiap 2 detik
setInterval(changePhoto, 2000);