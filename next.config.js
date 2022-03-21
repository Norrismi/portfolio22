/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig



// module.exports = {
//   reactStrictMode: true,
//   webpack: (config) => {
//     config.module.rules.push({
//       // test: /\.pdf$/,
//       use: {
//         loader: 'file-loader',
//         options: {
//           name: 'Assets/Resume.pdf',
//         },
//       },
//     });
//     return config;
//   }
// }
