

// Menampilkan tombol saat discroll ke bawah
window.onscroll = function () {
  const btn = document.getElementById("btnTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Fungsi untuk scroll ke atas
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


