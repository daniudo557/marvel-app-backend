const mailer = require('nodemailer')
const { host, port, user, pass } = require('../config/mail')

module.exports = (email, name, comics) => {
  const smtpTransport = mailer.createTransport({
    host,
    port,
    auth: { user, pass }
  })

  const getComicsList = () => {
    let comicEmailString = '\n\nSua lista de quadrinhos é:\n'
    comics.forEach((comic) => {
      const titleString = 'Título: ' + comic.title + '\n'
      comicEmailString += titleString

      const numberOfComicsString = 'Número de quadrinhos na lista: ' + comic.numberOfComics + '\n\n'
      comicEmailString += numberOfComicsString
    })
    return comicEmailString
  }

  const getText = () => {
    return `Olá, ${name}!` + getComicsList()
  }

  const mail = {
    to: email,
    from: 'contato@daniudo557.top',
    subject: 'Mensagem de Marvel-App',
    text: getText()
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
