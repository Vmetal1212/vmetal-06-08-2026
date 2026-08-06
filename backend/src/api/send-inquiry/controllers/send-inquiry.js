'use strict';

module.exports = {
  async sendInquiry(ctx) {
    const body = ctx.request.body;
    const files = ctx.request.files;

    const {
      firstName, lastName, email, contactNumber,
      product, category, weight, service,
      length, width, thickness, message
    } = body;

    if (!firstName || !email) {
      return ctx.badRequest('Missing required fields: firstName, email');
    }

    const entry = await strapi.entityService.create('api::inquiry.inquiry', {
      data: {
        firstName, lastName, email, contactNumber,
        product, category, weight, service,
        length, width, thickness, message
      },
      files: files?.attachment ? { attachment: files.attachment } : undefined,
    });

    return ctx.send({ success: true, data: entry });
  },
};
