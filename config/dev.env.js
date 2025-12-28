'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 补充后端接口地址（替换为你的Java后端实际启动地址）
  API_BASE_URL: '"http://localhost:9201"' 
})