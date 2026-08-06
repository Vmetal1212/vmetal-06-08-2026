module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/sendContact',
      handler: 'send-contact.sendContact',
      config: {
        auth: false,
      },
    },
  ],
};
