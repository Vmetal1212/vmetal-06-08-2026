module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.plugins["email"].services.email.send({
        to: result.email,
        from: "darshanshah7869@gmail.com",
        subject: "Thanks for reaching out to us.",
        html: `<!DOCTYPE html>
  
          <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
          
          <head>
              <title></title>
              <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
              <meta content="width=device-width, initial-scale=1.0" name="viewport" />
              <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
              <!--[if !mso]><!-->
              <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css" />
              <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet" type="text/css" />
              <!--<![endif]-->
              <style>
                  * {
                      box-sizing: border-box;
                  }
          
                  body {
                      margin: 0;
                      padding: 0;
                  }
          
                  a[x-apple-data-detectors] {
                      color: inherit !important;
                      text-decoration: inherit !important;
                  }
          
                  #MessageViewBody a {
                      color: inherit;
                      text-decoration: none;
                  }
          
                  p {
                      line-height: inherit
                  }
          
                  .desktop_hide,
                  .desktop_hide table {
                      mso-hide: all;
                      display: none;
                      max-height: 0px;
                      overflow: hidden;
                  }
          
                  .menu_block.desktop_hide .menu-links span {
                      mso-hide: all;
                  }
          
                  @media (max-width:900px) {
          
                      .desktop_hide table.icons-inner,
                      .social_block.desktop_hide .social-table {
                          display: inline-block !important;
                      }
          
                      .icons-inner {
                          text-align: center;
                      }
          
                      .icons-inner td {
                          margin: 0 auto;
                      }
          
                      .image_block img.big,
                      .row-content {
                          width: 100% !important;
                      }
          
                      .menu-checkbox[type=checkbox]~.menu-links {
                          display: none !important;
                          padding: 5px 0;
                      }
          
                      .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-open,
                      .menu-checkbox[type=checkbox]~.menu-links span.sep {
                          display: none !important;
                      }
          
                      .menu-checkbox[type=checkbox]:checked~.menu-links,
                      .menu-checkbox[type=checkbox]~.menu-trigger {
                          display: block !important;
                          max-width: none !important;
                          max-height: none !important;
                          font-size: inherit !important;
                      }
          
                      .menu-checkbox[type=checkbox]~.menu-links>a,
                      .menu-checkbox[type=checkbox]~.menu-links>span.label {
                          display: block !important;
                          text-align: center;
                      }
          
                      .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-close {
                          display: block !important;
                      }
          
                      .mobile_hide {
                          display: none;
                      }
          
                      .stack .column {
                          width: 100%;
                          display: block;
                      }
          
                      .mobile_hide {
                          min-height: 0;
                          max-height: 0;
                          max-width: 0;
                          overflow: hidden;
                          font-size: 0px;
                      }
          
                      .desktop_hide,
                      .desktop_hide table {
                          display: table !important;
                          max-height: none !important;
                      }
                  }
          
                  #memu-r0c1m2:checked~.menu-links {
                      background-color: #072854 !important;
                  }
          
                  #memu-r0c1m2:checked~.menu-links a,
                  #memu-r0c1m2:checked~.menu-links span {
                      color: #ffffff !important;
                  }
              </style>
          </head>
          
          <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
              <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;" width="100%">
                  <tbody>
                      <tr>
                          <td>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
                                  role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
                                                  role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="50%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="image_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:20px;padding-top:30px;width:100%;padding-right:0px;padding-left:0px;">
                                                                          <div align="left" class="alignment"
                                                                              style="line-height:10px"><a
                                                                                  href="http://www.example.com/"
                                                                                  style="outline:none" tabindex="-1"
                                                                                  target="_blank"><img alt="Logo"
                                                                                      src="https://ik.imagekit.io/souqcrehm/Vmetal_no_bg_1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675915376492"
                                                                                      style="display: block; height: auto; border: 0; width: 80px; max-width: 100%;"
                                                                                      title="Logo" width="187" /></a></div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="50%">
                                                              <div class="spacer_block"
                                                                  style="height:5px;line-height:5px;font-size:1px;"> </div>
                                                              <div class="spacer_block mobile_hide"
                                                                  style="height:55px;line-height:55px;font-size:1px;"> </div>
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="menu_block block-3" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="color:#000000;font-family:'Roboto Slab', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:14px;padding-bottom:10px;padding-top:15px;text-align:right;">
                                                                          <table border="0" cellpadding="0" cellspacing="0"
                                                                              role="presentation"
                                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                              width="100%">
                                                                              <tr>
                                                                                  <td class="alignment"
                                                                                      style="text-align:right;font-size:0px;">
                                                                                      <!--[if !mso]><!--><input
                                                                                          class="menu-checkbox" id="memu-r0c1m2"
                                                                                          style="display:none !important;max-height:0;visibility:hidden;"
                                                                                          type="checkbox" />
                                                                                      <!--<![endif]-->
                                                                                      <div class="menu-trigger"
                                                                                          style="display:none;max-height:0px;max-width:0px;font-size:0px;overflow:hidden;">
                                                                                          <label class="menu-label"
                                                                                              for="memu-r0c1m2"
                                                                                              style="height: 36px; width: 36px; display: inline-block; cursor: pointer; mso-hide: all; user-select: none; align: right; text-align: center; color: #ffffff; text-decoration: none; background-color: #072854; border-radius: 50%;"><span
                                                                                                  class="menu-open"
                                                                                                  style="mso-hide:all;font-size:26px;line-height:36px;">☰</span><span
                                                                                                  class="menu-close"
                                                                                                  style="display:none;mso-hide:all;font-size:26px;line-height:36px;">✕</span></label>
                                                                                      </div>
                                                                                      <div class="menu-links">
                                                                                        <!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:right;"><![endif]-->
                                                                                        <!--[if mso]><td style="padding-top:20px;padding-right:20px;padding-bottom:15px;padding-left:20px"><![endif]-->
                                                                                        <a target="_blank" href="https://vmetalsolutions.com/products" style='text-decoration: none;'>
                                                                                        <span
                                                                                            class="label"
                                                                                            style="mso-hide:false;padding-top:20px;padding-bottom:15px;padding-left:20px;padding-right:20px;display:inline;font-family:'Roboto Slab', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:14px;color:false;letter-spacing:normal;">PRODUCTS</span>
                                                                                        </a>
                                                                                        <!--[if mso]></td><td><![endif]--><span
                                                                                            class="sep"
                                                                                            style="font-size:14px;font-family:'Roboto Slab', Arial, 'Helvetica Neue', Helvetica, sans-serif;color:#000000;">-</span>
                                                                                        <!--[if mso]></td><![endif]-->
                                                                                        <!--[if mso]><td style="padding-top:20px;padding-right:20px;padding-bottom:15px;padding-left:20px"><![endif]-->
                                                                                        <a target="_blank" href="https://vmetalsolutions.com/services" style='text-decoration: none;'>
                                                                                        <span
                                                                                            class="label"
                                                                                            style="mso-hide:false;padding-top:20px;padding-bottom:15px;padding-left:20px;padding-right:20px;display:inline;font-family:'Roboto Slab', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:14px;color:false;letter-spacing:normal;">SERVICES</span>
                                                                                        </a>
                                                                                        <!--[if mso]></td><td><![endif]--><span
                                                                                            class="sep"
                                                                                            style="font-size:14px;font-family:'Roboto Slab', Arial, 'Helvetica Neue', Helvetica, sans-serif;color:#000000;">-</span>
                                                                                        <!--[if mso]></td><![endif]-->
                                                                                        <!--[if mso]><td style="padding-top:20px;padding-right:20px;padding-bottom:15px;padding-left:20px"><![endif]-->
                                                                                        <a target="_blank" href="https://vmetalsolutions.com/uses" style='text-decoration: none;'>
                                                                                        <span
                                                                                            class="label"
                                                                                            style="mso-hide:false;padding-top:20px;padding-bottom:15px;padding-left:20px;padding-right:20px;display:inline;font-family:'Roboto Slab', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:14px;color:false;letter-spacing:normal;">USES</span>
                                                                                        </a>
                                                                                        <!--[if mso]></td><![endif]-->
                                                                                        <!--[if mso]></tr></table><![endif]-->
                                                                                    </div>
                                                                                  </td>
                                                                              </tr>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #072854;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-position: center top; background-color: #072854; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="100%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="image_block block-1" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="width:100%;padding-right:0px;padding-left:0px;">
                                                                          <div align="center" class="alignment"
                                                                              style="line-height:10px"></div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:20px;padding-right:10px;">
                                                                          <div style="font-family: sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #072854; line-height: 1.2;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                      <span style="font-size:50px; color: #fff;"><strong>V
                                                                                              metal solutions inc.</strong></span>
                                                                                  </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-3" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:30px;padding-left:15px;padding-right:15px;padding-top:15px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px;">
                                                                                      <span style="font-size:16px;color: #fff;">Thank you so much for reaching us out. We will get back to you in a while.</span></p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="image_block block-4" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="width:100%;padding-right:0px;padding-left:0px;">
                                                                          <div align="center" class="alignment"
                                                                              style="line-height:10px"></div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #072854;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-position: center top; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 25px; padding-right: 25px; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="100%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-1" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px;">
                                                                          <div style="font-family: sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #072854; line-height: 1.2;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;">
                                                                                      <span
                                                                                          style="font-size:22px;color:#072854;">Details</span>
                                                                                  </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="66.66666666666667%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:15px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 30px;">
                                                                                      <span
                                                                                          style="font-size:20px;color:#072854;">Full
                                                                                          Name</span></p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:20px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;">
                                                                                      <span
                                                                                          style="font-size:16px;">${result.firstName}
                                                                                          ${result.lastName}</span></p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="100%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="divider_block block-1" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad" style="padding-bottom:10px;">
                                                                          <div align="center" class="alignment">
                                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                                  role="presentation"
                                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                                  width="100%">
                                                                                  <tr>
                                                                                      <td class="divider_inner"
                                                                                          style="font-size: 1px; line-height: 1px; border-top: 1px solid #DFDFDF;">
                                                                                          <span> </span></td>
                                                                                  </tr>
                                                                              </table>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="66.66666666666667%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:15px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 30px;">
                                                                                      <span
                                                                                          style="font-size:20px;color:#072854;">Product</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:20px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;">
                                                                                      <span
                                                                                          style="font-size:16px;">${result.product}</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="100%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="divider_block block-1" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad" style="padding-bottom:10px;">
                                                                          <div align="center" class="alignment">
                                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                                  role="presentation"
                                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                                  width="100%">
                                                                                  <tr>
                                                                                      <td class="divider_inner"
                                                                                          style="font-size: 1px; line-height: 1px; border-top: 1px solid #DFDFDF;">
                                                                                          <span> </span></td>
                                                                                  </tr>
                                                                              </table>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="66.66666666666667%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:15px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 30px;">
                                                                                      <span
                                                                                          style="font-size:20px;color:#072854;">Category</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:20px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;">
                                                                                      <span
                                                                                          style="font-size:16px;">${result.category}</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="100%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="divider_block block-1" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad" style="padding-bottom:10px;">
                                                                          <div align="center" class="alignment">
                                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                                  role="presentation"
                                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                                  width="100%">
                                                                                  <tr>
                                                                                      <td class="divider_inner"
                                                                                          style="font-size: 1px; line-height: 1px; border-top: 1px solid #DFDFDF;">
                                                                                          <span> </span></td>
                                                                                  </tr>
                                                                              </table>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="66.66666666666667%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:15px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 30px;">
                                                                                      <span
                                                                                          style="font-size:20px;color:#072854;">Service</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:20px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;">
                                                                                      <span
                                                                                          style="font-size:16px;">${result.service}</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="100%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="divider_block block-1" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad" style="padding-bottom:10px;">
                                                                          <div align="center" class="alignment">
                                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                                  role="presentation"
                                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                                  width="100%">
                                                                                  <tr>
                                                                                      <td class="divider_inner"
                                                                                          style="font-size: 1px; line-height: 1px; border-top: 1px solid #DFDFDF;">
                                                                                          <span> </span></td>
                                                                                  </tr>
                                                                              </table>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
          
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="66.66666666666667%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:15px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 30px;">
                                                                                      <span
                                                                                          style="font-size:20px;color:#072854;">Length</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:20px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;">
                                                                                      <span
                                                                                          style="font-size:16px;">${result.length}
                                                                                          mm</span></p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
                          role="presentation"
                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                          width="680">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block block-1" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 1px solid #DFDFDF;">
                                                                                  <span> </span>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="66.66666666666667%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:15px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 30px;">
                                                                                      <span
                                                                                          style="font-size:20px;color:#072854;">Width</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:20px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;">
                                                                                      <span
                                                                                          style="font-size:16px;">${result.width}
                                                                                          mm</span></p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
                          role="presentation"
                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                          width="680">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block block-1" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 1px solid #DFDFDF;">
                                                                                  <span> </span>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="66.66666666666667%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:15px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 30px;">
                                                                                      <span
                                                                                          style="font-size:20px;color:#072854;">Thickness</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:20px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;">
                                                                                      <span
                                                                                          style="font-size:16px;">${result.thickness}
                                                                                          mm</span></p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
                          role="presentation"
                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                          width="680">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block block-1" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 1px solid #DFDFDF;">
                                                                                  <span> </span>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="66.66666666666667%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:15px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 30px;">
                                                                                      <span
                                                                                          style="font-size:20px;color:#072854;">Weight</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:20px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;">
                                                                                      <span
                                                                                          style="font-size:16px;">${result.weight} 
                                                                                          MT</span></p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
                          role="presentation"
                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                          width="680">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block block-1" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 1px solid #DFDFDF;">
                                                                                  <span> </span>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="66.66666666666667%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:15px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 30px;">
                                                                                      <span
                                                                                          style="font-size:20px;color:#072854;">Company Name</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:20px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;">
                                                                                      <span
                                                                                          style="font-size:16px;">${result.companyName}
                                                                                          </span></p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
                          role="presentation"
                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                          width="680">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block block-1" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 1px solid #DFDFDF;">
                                                                                  <span> </span>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="66.66666666666667%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:15px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 30px;">
                                                                                      <span
                                                                                          style="font-size:20px;color:#072854;">GST</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:20px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;">
                                                                                      <span
                                                                                          style="font-size:16px;">${result.GST}
                                                                                          </span></p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
                          role="presentation"
                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                          width="680">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block block-1" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 1px solid #DFDFDF;">
                                                                                  <span> </span>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="66.66666666666667%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:15px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 30px;">
                                                                                      <span
                                                                                          style="font-size:20px;color:#072854;">Address Line 1</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:20px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;">
                                                                                      <span
                                                                                          style="font-size:16px;">${result.addressLine1}
                                                                                          </span></p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
                          role="presentation"
                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                          width="680">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block block-1" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 1px solid #DFDFDF;">
                                                                                  <span> </span>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="66.66666666666667%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:15px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 30px;">
                                                                                      <span
                                                                                          style="font-size:20px;color:#072854;">Address Line 2</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:20px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;">
                                                                                      <span
                                                                                          style="font-size:16px;">${result.addressLine2}
                                                                                          </span></p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
                          role="presentation"
                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                          width="680">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block block-1" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 1px solid #DFDFDF;">
                                                                                  <span> </span>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="66.66666666666667%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:15px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 30px;">
                                                                                      <span
                                                                                          style="font-size:20px;color:#072854;">City</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:20px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;">
                                                                                      <span
                                                                                          style="font-size:16px;">${result.city}
                                                                                          </span></p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
                          role="presentation"
                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                          width="680">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block block-1" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 1px solid #DFDFDF;">
                                                                                  <span> </span>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="66.66666666666667%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:15px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 30px;">
                                                                                      <span
                                                                                          style="font-size:20px;color:#072854;">State</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:20px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;">
                                                                                      <span
                                                                                          style="font-size:16px;">${result.state}
                                                                                          </span></p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
                          role="presentation"
                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                          width="680">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block block-1" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 1px solid #DFDFDF;">
                                                                                  <span> </span>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="66.66666666666667%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:15px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 30px;">
                                                                                      <span
                                                                                          style="font-size:20px;color:#072854;">Country</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:20px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;">
                                                                                      <span
                                                                                          style="font-size:16px;">${result.country}
                                                                                          </span></p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
                          role="presentation"
                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                          width="680">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block block-1" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 1px solid #DFDFDF;">
                                                                                  <span> </span>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12"
                                  role="presentation"
                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="66.66666666666667%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:15px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 30px;">
                                                                                      <span
                                                                                          style="font-size:20px;color:#072854;">Pincode</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:35px;padding-right:20px;padding-top:20px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #323232; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;">
                                                                                      <span
                                                                                          style="font-size:16px;">${result.pincode}
                                                                                          </span></p>
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                                       </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
                          role="presentation"
                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f7f2;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                          width="680">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block block-1" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 1px solid #DFDFDF;">
                                                                                  <span> </span>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-14"
                                  role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 35px; padding-bottom: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="100%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="button_block block-1" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
                                                                          <div align="center" class="alignment">
                                                                              <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com/" style="height:64px;width:345px;v-text-anchor:middle;" arcsize="55%" stroke="false" fillcolor="#072854"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:22px"><![endif]--><a
                                                                                  href="http://www.example.com/"
                                                                                  style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#072854;border-radius:35px;width:auto;border-top:0px solid #2F7D81;font-weight:undefined;border-right:0px solid #2F7D81;border-bottom:0px solid #2F7D81;border-left:0px solid #2F7D81;padding-top:10px;padding-bottom:10px;font-family:Oswald, Arial, Helvetica Neue, Helvetica, sans-serif;font-size:22px;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                                  target="_blank"><span
                                                                                      style="padding-left:45px;padding-right:45px;font-size:22px;display:inline-block;letter-spacing:normal;"><span
                                                                                          style="word-break:break-word;"><span
                                                                                              data-mce-style=""
                                                                                              style="line-height: 44px;">VISIT
                                                                                              WEBSITE</span></span></span></a>
                                                                              <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                              <table border="0" cellpadding="10" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad">
                                                                          <div style="font-family: sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #072854; line-height: 1.2;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                      <span style="font-size:34px;"><strong>About
                                                                                              us</strong></span></p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-15"
                                  role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="image_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="width:100%;padding-right:0px;padding-left:0px;padding-top:5px;">
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-3" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px;">
                                                                          <div style="font-family: sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #232132; line-height: 1.2;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                      <span style="font-size:18px;"><strong>RELIABILITY:
                                                                                              GUARANTEE</strong></span></p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-4" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:15px;padding-left:10px;padding-right:10px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #808080; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                      <span style="font-size:14px;">We respond to
                                                                                          any production need with great speed. At
                                                                                          V Metal Solutions Inc, just-in-time
                                                                                          delivery is integral to our
                                                                                          philosophy.</span></p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-2"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="image_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="width:100%;padding-right:0px;padding-left:0px;padding-top:5px;">
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-3" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px;">
                                                                          <div style="font-family: sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #232132; line-height: 1.2;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                      <span style="font-size:18px;"><strong>CUTTING-EDGE
                                                                                              TECHNOLOGY
                                                                                          </strong></span></p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-4" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:15px;padding-left:10px;padding-right:10px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #808080; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                      <span style="font-size:14px;">Cutting-edge
                                                                                          technology at V Metal Solutions Inc
                                                                                          forms the basis of all its services.
                                                                                          Whether cutting to length, profiling,
                                                                                          corrugation, slitting, or roll
                                                                                          development at V Metal Solutions Inc, we
                                                                                          ensure the highest standards are adhered
                                                                                          to at every level.</span></p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                          <td class="column column-3"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="33.333333333333336%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="image_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="width:100%;padding-right:0px;padding-left:0px;padding-top:5px;">
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-3" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px;">
                                                                          <div style="font-family: sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #232132; line-height: 1.2;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                      <span style="font-size:18px;"><strong>DELIVERY
                                                                                              ON-TIME
                                                                                          </strong></span></p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-4" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:15px;padding-left:10px;padding-right:10px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #808080; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                      <span style="font-size:14px;">We deliver to
                                                                                          our customers as per the commitment
                                                                                          which helps them to grow with us.</span>
                                                                                  </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-16"
                                  role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="100%">
                                                              <div class="spacer_block"
                                                                  style="height:25px;line-height:25px;font-size:1px;"> </div>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-17"
                                  role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="100%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="image_block block-1" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="width:100%;padding-right:0px;padding-left:0px;">
                                                                          <div align="center" class="alignment"
                                                                              style="line-height:10px"></div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-18"
                                  role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #072854; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="100%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-1" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:10px;padding-left:10px;padding-right:10px;">
                                                                          <div style="font-family: sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                      <span
                                                                                          style="font-size:28px;color:#ffffff;">V
                                                                                          metal solutions inc.</span></p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:10px;padding-left:10px;padding-right:10px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #072854; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px;">
                                                                                      <span
                                                                                          style="font-size:16px;color:#fff;">221,
                                                                                          Second Floor, Vishala Supreme, Nr.
                                                                                          Torrent Power Sub-Station, S.P. Ring
                                                                                          Road, Nikol, Ahmedabad - 382350</span>
                                                                                  </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="text_block block-3" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:10px;padding-left:10px;padding-right:10px;">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #808080; line-height: 1.5;">
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="button_block block-4" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
                                                                          <div align="center" class="alignment">
                                                                              <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com/" style="height:67px;width:341px;v-text-anchor:middle;" arcsize="53%" strokeweight="1.5pt" strokecolor="#FFFFFF" fillcolor="#072854"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#072854; font-family:Arial, sans-serif; font-size:22px"><![endif]--><a
                                                                                  href="http://www.example.com/"
                                                                                  style="text-decoration:none;display:inline-block;color:#072854;background-color:#072854;border-radius:35px;width:auto;border-top:2px solid #FFFFFF;font-weight:undefined;border-right:2px solid #FFFFFF;border-bottom:2px solid #FFFFFF;border-left:2px solid #FFFFFF;padding-top:10px;padding-bottom:10px;font-family:Oswald, Arial, Helvetica Neue, Helvetica, sans-serif;font-size:22px;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                                  target="_blank"><span
                                                                                      style="padding-left:45px;padding-right:45px;font-size:22px;display:inline-block;letter-spacing:normal;"><span
                                                                                          style="word-break:break-word;"><span
                                                                                              data-mce-style=""
                                                                                              style="line-height: 44px;color: #fff;">Visit Website</span></span></span></a>
                                                                              <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-19"
                                  role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 30px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="100%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="image_block block-1" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="width:100%;padding-right:0px;padding-left:0px;">
                                                                          <div align="center" class="alignment"
                                                                              style="line-height:10px"></div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-20"
                                  role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 30px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="100%">
                                                              <table border="0" cellpadding="10" cellspacing="0"
                                                                  class="social_block block-1" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad">
                                                                          <div align="center" class="alignment">
                                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                                  class="social-table" role="presentation"
                                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;"
                                                                                  width="184px">
                                                                                  <tr>
                                                                                      <td style="padding:0 7px 0 7px;"><a
                                                                                              href="http://www.example.com/"
                                                                                              target="_blank"><img alt="Whatsapp"
                                                                                                  height="32"
                                                                                                  src="style="width: 40px; height: auto;"
                                                                                                  src="https://ik.imagekit.io/souqcrehm/whatsapp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675915687579"
                                                                                                  style="display: block; height: auto; border: 0;"
                                                                                                  title="Whatsapp"
                                                                                                  width="32" /></a></td>
                                                                                      <td style="padding:0 7px 0 7px;"><a
                                                                                              href="http://www.example.com/"
                                                                                              target="_blank"><img alt="Linkedin"
                                                                                                  height="32"
                                                                                                  src=https://ik.imagekit.io/souqcrehm/linkedIn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675915687584"
                                                                                                  style="display: block; height: auto; border: 0;"
                                                                                                  title="LinkedIn"
                                                                                                  width="32" /></a></td>
                                                                                      <td style="padding:0 7px 0 7px;"><a
                                                                                              href="http://www.example.com/"
                                                                                              target="_blank"><img alt="Instagram"
                                                                                                  height="32"
                                                                                                  src="https://ik.imagekit.io/souqcrehm/instagram.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675915687552"
                                                                                                  style="display: block; height: auto; border: 0;"
                                                                                                  title="Instagram"
                                                                                                  width="32" /></a></td>
                                                                                  </tr>
                                                                              </table>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                              <table border="0" cellpadding="10" cellspacing="0"
                                                                  class="divider_block block-2" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad">
                                                                          <div align="center" class="alignment">
                                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                                  role="presentation"
                                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                                  width="100%">
                                                                                  <tr>
                                                                                      <td class="divider_inner"
                                                                                          style="font-size: 1px; line-height: 1px; border-top: 1px solid #E0E0E0;">
                                                                                          <span> </span></td>
                                                                                  </tr>
                                                                              </table>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                              <table border="0" cellpadding="10" cellspacing="0"
                                                                  class="text_block block-3" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad">
                                                                          <div style="font-family: Arial, sans-serif">
                                                                              <div class=""
                                                                                  style="font-size: 12px; font-family: Roboto Slab, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #a6a4a2; line-height: 1.5;">
                                                                                  <p
                                                                                      style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 18px;">
                                                                                      <span style="font-size:12px;">This message
                                                                                          was sent to <a
                                                                                              href="mailto:${result.email}"
                                                                                              style="text-decoration: none; color: #a6a4a2;"
                                                                                              title="${result.email}">${result.email}</a></span>
                                                                                  </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-21"
                                  role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                  class="row-content stack" role="presentation"
                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;"
                                                  width="680">
                                                  <tbody>
                                                      <tr>
                                                          <td class="column column-1"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                              width="100%">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  class="icons_block block-1" role="presentation"
                                                                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                  width="100%">
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                                          <table cellpadding="0" cellspacing="0"
                                                                              role="presentation"
                                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                              width="100%">
                                                                              <tr>
                                                                                  <td class="alignment"
                                                                                      style="vertical-align: middle; text-align: center;">
                                                                                      <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                                      <!--[if !vml]><!-->
                                                                                      <table cellpadding="0" cellspacing="0"
                                                                                          class="icons-inner" role="presentation"
                                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
                                                                                          <!--<![endif]-->
                                                                                          <tr>
          
                                                                                          </tr>
                                                                                      </table>
                                                                                  </td>
                                                                              </tr>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </td>
                      </tr>
                  </tbody>
              </table><!-- End -->
          </body>
          
          </html>`,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
