module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: 1337,
  url: 'https://www.vmetalsolutions.com',
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
});
