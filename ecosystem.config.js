module.exports = {
  apps: [{
    name: 'v-metals',
    script: 'node_modules/.bin/next',
    args: 'start -p 4001',
    cwd: '/var/www/vmetals',
    env: {
      NODE_ENV: 'production',
      API_URL: 'http://127.0.0.1:1337',
      NEXT_PUBLIC_API_URL: 'https://www.vmetalsolutions.com',
      WEB_URL: 'https://www.vmetalsolutions.com/'
    }
  }]
}
