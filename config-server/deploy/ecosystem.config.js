/*
 * @Author: Cecil 
 * @Last Modified by: Cecil
 * @Last Modified time: 2018-05-30 15:30:43
 * @Description 无
 */
'use strict'

const path = require('path')
const { 
  GeneratePM2AppConfig,
  GeneratePM2DeployConfig
 } = require("vastify").DeployTool
const name = 'config-server'

const processFile = {
  apps: [
    GeneratePM2AppConfig({
      name,
      script: path.join(__dirname, '../src/index.js'),
      error_file: path.join(__dirname, `./log/${name}-err.log`),
      out_file: path.join(__dirname, `./log/${name}-out.log`),
      instances: 1
    })
  ],
  deploy: {
    production: GeneratePM2DeployConfig({
      user: 'root',
      host: 'qingf.me',
      repo: 'https://github.com/Cecil0o0/config-server.git',
      path: '/home/root/apps/config-server',
      'post-deploy': 'rm -rf ./node_modules && npm install && pm2 startOrRestart deploy/ecosystem.config.js --env production'
    })
  }
}

module.exports = processFile
