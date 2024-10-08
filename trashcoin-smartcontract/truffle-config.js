module.exports = {
  networks: {
    // Jaringan lokal (Ganache)
    development: {
      host: "127.0.0.1", // Ganache host
      port: 7545,        // Ganache port
      network_id: "5777",   // Match any network id
      gas: 6721975,  // Batas gas yang lebih besar
      gasPrice: 20000000000,  // Harga gas default
    },
  },
  compilers: {
    solc: {
      version: "0.8.20",  // Pastikan Anda menggunakan versi 0.8.0 atau lebih tinggi
    },
  },
};
