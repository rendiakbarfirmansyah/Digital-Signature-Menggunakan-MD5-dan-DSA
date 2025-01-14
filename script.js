// Fungsi untuk menghasilkan kunci DSA (dummy untuk contoh ini)
let privateKey, publicKey;

// Tanda tangani pesan
async function signMessage() {
  const message = document.getElementById("message").value;
  const hash = CryptoJS.MD5(message).toString(); // Hash MD5 dari pesan
  const signature = await dsaSign(hash); // Tanda tangani hash dengan DSA
  document.getElementById("signature").value = signature;
}

// Fungsi untuk menandatangani hash dengan DSA
async function dsaSign(hash) {
  // Kembalikan hanya hash tanpa tambahan teks
  return hash; // Ganti dengan implementasi DSA sebenarnya jika diperlukan
}

// Navigasi ke halaman verifikasi
function goToVerifyPage() {
  window.location.href = "verify.html";
}

// Verifikasi tanda tangan
async function verifySignature() {
  const message = document.getElementById("verifyMessage").value;
  const signature = document.getElementById("verifySignature").value;
  const hash = CryptoJS.MD5(message).toString(); // Hash MD5 dari pesan

  // Verifikasi tanda tangan
  const isValid = hash === signature;

  const verificationResult = document.getElementById("verificationResult");
  verificationResult.innerText = isValid
    ? "Tanda tangan valid!"
    : "Tanda tangan tidak valid!";

  // Ganti warna berdasarkan validitas
  verificationResult.style.color = isValid ? "green" : "red"; // Perubahan di sini
}

// Fungsi untuk menginisialisasi kunci (dummy)
async function generateKeys() {
  // Dalam implementasi nyata, Anda harus menghasilkan kunci DSA di sini
  privateKey = "dummyPrivateKey";
  publicKey = "dummyPublicKey";
}

// Panggil fungsi generateKeys saat halaman dimuat
window.onload = generateKeys;
