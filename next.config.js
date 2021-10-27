const { withPlugins } = require('next-compose-plugins');
// const withLinaria = require('next-linaria')
const withTwstyled = require('next-plugin-twstyled')

module.exports = withTwstyled({
  webpack: config => config
})
