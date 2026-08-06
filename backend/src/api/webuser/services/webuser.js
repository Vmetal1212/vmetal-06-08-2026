'use strict';

/**
 * webuser service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::webuser.webuser');
