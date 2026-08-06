module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/sendInquiry',
      handler: 'send-inquiry.sendInquiry',
      config: {
        auth: false,
      },
    },
  ],
};
