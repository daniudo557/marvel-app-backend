# Marvel-App-Backend
This is a backend project to send emails with comics list that users can create on [Marvel-app](https://github.com/daniudo557/marvel-app).

## Technologies
It was created using:
- [Node](https://github.com/nodejs/node)
- [Express](https://github.com/expressjs/express)
- [Nodemailer](https://github.com/nodemailer/nodemailer) - to allow easy as cake email sending
- [Body-parser](https://github.com/expressjs/body-parser) - to convert the request body into JSON

## Quickstart

1- Download the source code
`git clone https://github.com/daniudo557/marvel-app-backend`

2- Install all the dependencies
`npm install`

4 - Create `config/mail.json` file on `/src` and include this lines:
```
{
  "host": <YOUR_HOST>,
  "port": <YOUR_PORT>,
  "user": <YOUR_USER>,
  "pass": <YOUR_PASSWORD>
}
```

3- Run project
`npm start`

## Demo
This is a [Demo](https://daniudo557.github.io/marvel-app/) of [Marvel-app](https://github.com/daniudo557/marvel-app). Feel free to test and use

