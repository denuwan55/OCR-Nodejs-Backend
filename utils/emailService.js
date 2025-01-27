const nodemailer = require('nodemailer')

const body = (type, message, name)=>{
    switch(type) {
        case "ACCEPT":
          return    `
          <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

          <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

          <head>
          <!--[if gte mso 9]>
          <xml>
          <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="x-apple-disable-message-reformatting">
          <!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <!--<![endif]-->
          <title></title>

          <style type="text/css">
              @media only screen and (min-width: 620px) {
              .u-row {
                  width: 600px !important;
              }
              .u-row .u-col {
                  vertical-align: top;
              }
              .u-row .u-col-100 {
                  width: 600px !important;
              }
              }
              
              @media (max-width: 620px) {
              .u-row-container {
                  max-width: 100% !important;
                  padding-left: 0px !important;
                  padding-right: 0px !important;
              }
              .u-row .u-col {
                  min-width: 320px !important;
                  max-width: 100% !important;
                  display: block !important;
              }
              .u-row {
                  width: 100% !important;
              }
              .u-col {
                  width: 100% !important;
              }
              .u-col>div {
                  margin: 0 auto;
              }
              }
              
              body {
              margin: 0;
              padding: 0;
              }
              
              table,
              tr,
              td {
              vertical-align: top;
              border-collapse: collapse;
              }
              
              p {
              margin: 0;
              }
              
              .ie-container table,
              .mso-container table {
              table-layout: fixed;
              }
              
              * {
              line-height: inherit;
              }
              
              a[x-apple-data-detectors='true'] {
              color: inherit !important;
              text-decoration: none !important;
              }
              
              table,
              td {
              color: #000000;
              }
              
              #u_body a {
              color: #0000ee;
              text-decoration: underline;
              }
          </style>



          <!--[if !mso]><!-->
          <link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" type="text/css">
          <!--<![endif]-->

          </head>

          <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
          <!--[if IE]><div class="ie-container"><![endif]-->
          <!--[if mso]><div class="mso-container"><![endif]-->
          <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%" cellpadding="0" cellspacing="0">
              <tbody>
              <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->


                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                      <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;">
                      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #003399;"><![endif]-->

                          <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #48a9e6;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                          <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                          <div style="background-color: #48a9e6;height: 100%;width: 100% !important;">
                              <!--[if (!mso)&(!IE)]><!-->
                              <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                              <!--<![endif]-->

                              <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                  <tbody>
                                  <tr>
                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:21px;font-family:'Cabin',sans-serif;" align="left">

                                      <div style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                          <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 18px; line-height: 25.2px;"><strong>T H A N K S  F O R  S I G N I N G  U P  F O R  O C R !</strong></span></p>
                                      </div>

                                      </td>
                                  </tr>
                                  </tbody>
                              </table>

                              <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                  <tbody>
                                  <tr>
                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 31px;font-family:'Cabin',sans-serif;" align="left">

                                      <div style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                          <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 24px; line-height: 33.6px;"><strong><span style="line-height: 33.6px;">Get started!</span></strong>
                                          </span>
                                          </p>
                                      </div>

                                      </td>
                                  </tr>
                                  </tbody>
                              </table>

                              <!--[if (!mso)&(!IE)]><!-->
                              </div>
                              <!--<![endif]-->
                          </div>
                          </div>
                          <!--[if (mso)|(IE)]></td><![endif]-->
                          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                      </div>
                  </div>



                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                      <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->

                          <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                          <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                          <div style="height: 100%;width: 100% !important;">
                              <!--[if (!mso)&(!IE)]><!-->
                              <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                              <!--<![endif]-->

                              <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                  <tbody>
                                  <tr>
                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:15px 55px 16px;font-family:'Cabin',sans-serif;" align="left">

                                      <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                          <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 18px; line-height: 28.8px;"><span style="font-size: 22px; line-height: 35.2px;">Hello <strong>${name}</strong></span>, </span>
                                          </p>
                                          <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 20px; line-height: 32px;">We'd like to confirm that <strong><em><span style="color: #2dc26b; line-height: 32px;">your account was created successfully.</span></em>
                                          </strong> To get you started, please click on the link below to log in to your account.</span>
                                          </p>
                                      </div>

                                      </td>
                                  </tr>
                                  </tbody>
                              </table>

                              <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                  <tbody>
                                  <tr>
                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">

                                      <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
                                      <div align="center">
                                          <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:44px; v-text-anchor:middle; width:132px;" arcsize="9%"  stroke="f" fillcolor="#2dc26b"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Cabin',sans-serif;"><![endif]-->
                                          <a href="" target="_blank" class="v-button" style="box-sizing: border-box;display: inline-block;font-family:'Cabin',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #2dc26b; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 14px;">
                                          <span style="display:block;padding:14px 44px 13px;line-height:120%;"><span style="line-height: 16.8px;"><strong><span style="line-height: 16.8px;">LOG IN</span></strong>
                                          </span>
                                          </span>
                                          </a>
                                          <!--[if mso]></center></v:roundrect><![endif]-->
                                      </div>

                                      </td>
                                  </tr>
                                  </tbody>
                              </table>

                              <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                  <tbody>
                                  <tr>
                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:15px 55px;font-family:'Cabin',sans-serif;" align="left">

                                      <div style="line-height: 170%; text-align: center; word-wrap: break-word;">
                                          <p style="line-height: 170%; font-size: 14px;"><span style="font-size: 20px; line-height: 34px;">Thanks,</span></p>
                                          <p style="line-height: 170%; font-size: 14px;"><span style="font-size: 20px; line-height: 34px;">The OCR research team.</span></p>
                                      </div>

                                      </td>
                                  </tr>
                                  </tbody>
                              </table>

                              <!--[if (!mso)&(!IE)]><!-->
                              </div>
                              <!--<![endif]-->
                          </div>
                          </div>
                          <!--[if (mso)|(IE)]></td><![endif]-->
                          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                      </div>
                  </div>



                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                      <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #e5eaf5;">
                      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #e5eaf5;"><![endif]-->

                          <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                          <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                          <div style="height: 100%;width: 100% !important;">
                              <!--[if (!mso)&(!IE)]><!-->
                              <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                              <!--<![endif]-->

                              <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                  <tbody>
                                  <tr>
                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:18px 55px;font-family:'Cabin',sans-serif;" align="left">

                                      <div style="color: #003399; line-height: 160%; text-align: center; word-wrap: break-word;">
                                          <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 22px; line-height: 35.2px;"><strong>Get in touch</strong></span></p>
                                          <p style="font-size: 14px; line-height: 160%;"><a rel="noopener" href="mailto:ocr.tech.team@gmail.com" target="_blank"><span style="font-size: 16px; line-height: 25.6px; color: #000000;">ocr.tech.team@gmail.com</span></a></p>
                                      </div>

                                      </td>
                                  </tr>
                                  </tbody>
                              </table>

                              <!--[if (!mso)&(!IE)]><!-->
                              </div>
                              <!--<![endif]-->
                          </div>
                          </div>
                          <!--[if (mso)|(IE)]></td><![endif]-->
                          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                      </div>
                  </div>



                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                      <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;">
                      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #003399;"><![endif]-->

                          <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #48a9e6;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                          <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                          <div style="background-color: #48a9e6;height: 100%;width: 100% !important;">
                              <!--[if (!mso)&(!IE)]><!-->
                              <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                              <!--<![endif]-->

                              <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                  <tbody>
                                  <tr>
                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">

                                      <div style="color: #fafafa; line-height: 180%; text-align: center; word-wrap: break-word;">
                                          <p style="font-size: 14px; line-height: 180%;"><span style="font-size: 16px; line-height: 28.8px;">Copyrights &copy; Company All Rights Reserved</span></p>
                                      </div>

                                      </td>
                                  </tr>
                                  </tbody>
                              </table>

                              <!--[if (!mso)&(!IE)]><!-->
                              </div>
                              <!--<![endif]-->
                          </div>
                          </div>
                          <!--[if (mso)|(IE)]></td><![endif]-->
                          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                      </div>
                  </div>


                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  </td>
              </tr>
              </tbody>
          </table>
          <!--[if mso]></div><![endif]-->
          <!--[if IE]></div><![endif]-->
          </body>

          </html>
                    `
        case "REJECT":
            return    `
            <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
            
            <head>
            <!--[if gte mso 9]>
            <xml>
            <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="x-apple-disable-message-reformatting">
            <!--[if !mso]><!-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <!--<![endif]-->
            <title></title>
            
            <style type="text/css">
                @media only screen and (min-width: 620px) {
                .u-row {
                    width: 600px !important;
                }
                .u-row .u-col {
                    vertical-align: top;
                }
                .u-row .u-col-100 {
                    width: 600px !important;
                }
                }
                
                @media (max-width: 620px) {
                .u-row-container {
                    max-width: 100% !important;
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                }
                .u-row .u-col {
                    min-width: 320px !important;
                    max-width: 100% !important;
                    display: block !important;
                }
                .u-row {
                    width: 100% !important;
                }
                .u-col {
                    width: 100% !important;
                }
                .u-col>div {
                    margin: 0 auto;
                }
                }
                
                body {
                margin: 0;
                padding: 0;
                }
                
                table,
                tr,
                td {
                vertical-align: top;
                border-collapse: collapse;
                }
                
                p {
                margin: 0;
                }
                
                .ie-container table,
                .mso-container table {
                table-layout: fixed;
                }
                
                * {
                line-height: inherit;
                }
                
                a[x-apple-data-detectors='true'] {
                color: inherit !important;
                text-decoration: none !important;
                }
                
                table,
                td {
                color: #000000;
                }
                
                #u_body a {
                color: #0000ee;
                text-decoration: underline;
                }
            </style>
            
            
            
            <!--[if !mso]><!-->
            <link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" type="text/css">
            <!--<![endif]-->
            
            </head>
            
            <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
            <!--[if IE]><div class="ie-container"><![endif]-->
            <!--[if mso]><div class="mso-container"><![endif]-->
            <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%" cellpadding="0" cellspacing="0">
                <tbody>
                <tr style="vertical-align: top">
                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->
            
            
                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #003399;"><![endif]-->
            
                            <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #48a9e6;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                            <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                            <div style="background-color: #48a9e6;height: 100%;width: 100% !important;">
                                <!--[if (!mso)&(!IE)]><!-->
                                <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <!--<![endif]-->
            
                                <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:44px;font-family:'Cabin',sans-serif;" align="left">
            
                                        <div style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                            <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 18px; line-height: 25.2px;"><strong><span style="font-size: 22px; line-height: 30.8px;">T H A N K S  F O R  S I G N I </span><span style="font-size: 22px; line-height: 30.8px;">N G  U P  F O R  O C R !</span></strong>
                                            </span>
                                            </p>
                                        </div>
            
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
            
                                <!--[if (!mso)&(!IE)]><!-->
                                </div>
                                <!--<![endif]-->
                            </div>
                            </div>
                            <!--[if (mso)|(IE)]></td><![endif]-->
                            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                        </div>
                        </div>
                    </div>
            
            
            
                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
            
                            <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                            <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                            <div style="height: 100%;width: 100% !important;">
                                <!--[if (!mso)&(!IE)]><!-->
                                <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <!--<![endif]-->
            
                                <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:15px 55px 16px;font-family:'Cabin',sans-serif;" align="left">
            
                                        <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                            <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 18px; line-height: 28.8px;"><span style="font-size: 22px; line-height: 35.2px;">Hello <strong>${name}</strong></span>, </span>
                                            </p>
                                            <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 20px; line-height: 32px;">We regret to inform you that <span style="color: #e03e2d; line-height: 32px;"><strong><em><span style="line-height: 32px;">your account activation was rejected</span>.</em>
                                            </strong>
                                            </span>To learn more, please contact the system administrator.</span>
                                            </p>
                                        </div>
            
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
            
                                <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
            
                                        <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
                                        <div align="center">
                                            <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:44px; v-text-anchor:middle; width:156px;" arcsize="9%"  stroke="f" fillcolor="#d4574a"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Cabin',sans-serif;"><![endif]-->
                                            <a href="" target="_blank" class="v-button" style="box-sizing: border-box;display: inline-block;font-family:'Cabin',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #d4574a; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 14px;">
                                            <span style="display:block;padding:14px 44px 13px;line-height:120%;"><span style="line-height: 16.8px;"><strong><span style="line-height: 16.8px;">Learn More</span></strong>
                                            </span>
                                            </span>
                                            </a>
                                            <!--[if mso]></center></v:roundrect><![endif]-->
                                        </div>
            
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
            
                                <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:15px 55px;font-family:'Cabin',sans-serif;" align="left">
            
                                        <div style="line-height: 170%; text-align: center; word-wrap: break-word;">
                                            <p style="line-height: 170%; font-size: 14px;"><span style="font-size: 20px; line-height: 34px;">Thanks,</span></p>
                                            <p style="line-height: 170%; font-size: 14px;"><span style="font-size: 20px; line-height: 34px;">The OCR research team.</span></p>
                                        </div>
            
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
            
                                <!--[if (!mso)&(!IE)]><!-->
                                </div>
                                <!--<![endif]-->
                            </div>
                            </div>
                            <!--[if (mso)|(IE)]></td><![endif]-->
                            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                        </div>
                        </div>
                    </div>
            
            
            
                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #e5eaf5;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #e5eaf5;"><![endif]-->
            
                            <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                            <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                            <div style="height: 100%;width: 100% !important;">
                                <!--[if (!mso)&(!IE)]><!-->
                                <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <!--<![endif]-->
            
                                <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:18px 55px;font-family:'Cabin',sans-serif;" align="left">
            
                                        <div style="color: #003399; line-height: 160%; text-align: center; word-wrap: break-word;">
                                            <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 22px; line-height: 35.2px;"><strong>Get in touch</strong></span></p>
                                            <p style="font-size: 14px; line-height: 160%;"><a rel="noopener" href="mailto:ocr.tech.team@gmail.com" target="_blank"><span style="font-size: 16px; line-height: 25.6px; color: #000000;">ocr.tech.team@gmail.com</span></a></p>
                                        </div>
            
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
            
                                <!--[if (!mso)&(!IE)]><!-->
                                </div>
                                <!--<![endif]-->
                            </div>
                            </div>
                            <!--[if (mso)|(IE)]></td><![endif]-->
                            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                        </div>
                        </div>
                    </div>
            
            
            
                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #003399;"><![endif]-->
            
                            <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #48a9e6;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                            <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                            <div style="background-color: #48a9e6;height: 100%;width: 100% !important;">
                                <!--[if (!mso)&(!IE)]><!-->
                                <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <!--<![endif]-->
            
                                <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
            
                                        <div style="color: #fafafa; line-height: 180%; text-align: center; word-wrap: break-word;">
                                            <p style="font-size: 14px; line-height: 180%;"><span style="font-size: 16px; line-height: 28.8px;">Copyrights &copy; Company All Rights Reserved</span></p>
                                        </div>
            
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
            
                                <!--[if (!mso)&(!IE)]><!-->
                                </div>
                                <!--<![endif]-->
                            </div>
                            </div>
                            <!--[if (mso)|(IE)]></td><![endif]-->
                            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                        </div>
                        </div>
                    </div>
            
            
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    </td>
                </tr>
                </tbody>
            </table>
            <!--[if mso]></div><![endif]-->
            <!--[if IE]></div><![endif]-->
            </body>
            
            </html>
            `
        default:
           return ' '
    }
}

const reviewReminderBody = (reviewer, assignments) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Telecon Session Review Reminder</title>
          <style>
            /* Styling for the email body */
            body {
              font-family: Arial, sans-serif;
              font-size: 14px;
              line-height: 1.5;
              color: #444444;
            }
            h1 {
              font-size: 24px;
              margin-bottom: 24px;
            }
            p {
              margin-bottom: 16px;
            }
            ul {
              list-style-type: disc;
              margin-left: 24px;
              margin-bottom: 16px;
            }
            li {
              margin-bottom: 4px;
            }
            button {
              background-color: #008CBA;
              color: #FFFFFF;
              font-size: 16px;
              padding: 12px 24px;
              border: none;
              border-radius: 4px;
              text-decoration: none;
              cursor: pointer;
              margin-bottom: 16px;
            }
            button:hover {
              background-color: #006D87;
            }
          </style>
        </head>
        <body>
          <h1>Telecon Session Review Reminder</h1>
          <p>Hello ${reviewer.username},</p>
          <p>This is a reminder that you have the following telecon session review assignments that have not been completed yet:</p>
          <ul>
              ${assignments
                .map(
                  (a) =>
                    `<li>${a.telecon_entry.complaint} - ${a.telecon_entry.patient.patient_name}</li>`
                )
                .join("")}
          </ul>
          <p>Please complete these reviews as soon as possible. Your timely feedback is appreciated.</p>
          <button>Go to Reviews Dashboard</button>
          <p>Thank you for your cooperation.</p>
          <p>Sincerely,<br>The Telecon Session Review Team</p>
        </body>
      </html>
      
      `;
  };
  
function sendEmail(recieversEmail, type, message, name){

    return new Promise((resolve, reject)=>{

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: process.env.SENDERS_EMAIL,
                pass: process.env.SENDERS_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        })

        const mail_config = {
            from: `OCR Tech Team <${process.env.SENDERS_EMAIL}>`,
            to: recieversEmail,
            subject: 'OCRP Account Registrations',
            matext:'Your OCRP account is ready to use. Use your credentials to login to the application.',
            html: body(type,message,name)
        }

        transporter.sendMail(mail_config, function(error, info){
            if(error){
                console.log(error)
                return reject({message: 'Error sending emails'})
            }

            return resolve({message: 'email sent successfuly'})
        })
    })

}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SENDERS_EMAIL,
      pass: process.env.SENDERS_PASS,
    },
  });
  
  // Weekly email function
  const sendWeeklyEmails = async () => {
    const Assignment = require("../models/Assignment");
    try {
      // Get all the assignments that have not been reviewed yet
      const assignments = await Assignment.find({ reviewed: false })
        .populate("reviewer_id")
        .populate("telecon_entry");
      assignments.forEach((assignment) => {
        assignment.telecon_entry.populate("patient");
      });
  
      // console.log(assignments);
  
      // Group the assignments by reviewer
      const assignmentsByReviewer = assignments.reduce((result, assignment) => {
        const reviewerId = assignment.reviewer_id._id;
        if (!result[reviewerId]) {
          result[reviewerId] = [];
        }
        result[reviewerId].push(assignment);
        return result;
      }, {});
  
      // Send emails to each reviewer
      const User = require("../models/User");
      for (const reviewerId in assignmentsByReviewer) {
        const reviewer = await User.findById(reviewerId);
        const assignments = assignmentsByReviewer[reviewerId];
        const emailBody = reviewReminderBody(reviewer, assignments);
  
        const sending = await transporter.sendMail(
          {
            from: process.env.SENDERS_EMAIL,
            to: reviewer.email,
            subject: "Telecon Review Assignments Reminder",
            html: emailBody,
          },
          (err, info) => {
            if (err) {
              console.log(err);
            } else {
              console.log(info);
            }
          }
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  module.exports = { sendEmail, sendWeeklyEmails };
  