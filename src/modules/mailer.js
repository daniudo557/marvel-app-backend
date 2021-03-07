const mailer = require('nodemailer')
const { user, pass } = require('../config/mail')

module.exports = (email, name, message) => {
  const smtpTransport = mailer.createTransport({
    host: 'smtp.umbler.com',
    port: 587,
    secure: false, // SSL/TLS
    auth: { user, pass }
  })

  const mail = {
    from: 'Daniel Sampaio de Macedo',
    to: email,
    subject: `${name} te enviou uma mensagem`,
    text: message
    // html: "<b>Opcionalmente, pode enviar como HTML</b>"
  }

  return new Promise((resolve, reject) => {
    smtpTransport.sendMail(mail)
      .then(response => {
        smtpTransport.close()
        return resolve(response)
      })
      .catch(error => {
        smtpTransport.close()
        return reject(error)
      })
  })
}
