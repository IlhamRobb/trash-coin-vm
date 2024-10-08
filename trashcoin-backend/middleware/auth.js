const jwt = require('jsonwebtoken');

// Middleware untuk memeriksa autentikasi JWT
module.exports = function (req, res, next) {
  // Mengambil token dari header permintaan
  const token = req.header('x-auth-token');
  
  // Jika tidak ada token, kirim pesan bahwa akses ditolak
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verifikasi token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Tambahkan user ke request object setelah verifikasi
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
