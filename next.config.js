module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.rajaongkir.com/starter/:path*",
      },
    ];
  },
};


// module.exports = {
//     async rewrites() {
//       return [
//         {
//           source: '/api/city',
//           destination: 'https://api.rajaongkir.com/starter/city' // Memastikan endpoint tepat
//         }
//       ]
//     }
//   };
  