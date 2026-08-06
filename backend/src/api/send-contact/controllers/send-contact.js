'use strict';

module.exports = {
  async sendContact(ctx) {
    const { name, email, message, phoneNumber, subject } = ctx.request.body;

    if (!name || !email || !message || !subject) {
      return ctx.badRequest('Missing required fields: name, email, subject, message');
    }

    const entry = await strapi.entityService.create('api::contact-response.contact-response', {
      data: { name, email, message, phoneNumber, subject },
    });

    return ctx.send({ success: true, data: entry });
  },
};
