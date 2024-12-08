/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[hash:8].[ext]',
          },
        },
      });
  
      return config;
    },
  };
  
  export default nextConfig;