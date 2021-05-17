# Security of Stonks Authentication 

## Hashing passwords using Node.js and bcrypt library
- Bcrypt library allows us to hash and compare passwords. It is a way to hash and store passwords safely in the database. 
- We implemented the authentication using bcrypt so that it can store the passwords in PostgreSQL database. 
- The following is an example from our database of how we safe the information for log in and registration in our database:
[
  {
    id: '5',
    name: 'Anna',
    email: 'anna@gmail.com',
    password: '$2b$10$Y7X1WbJ75HWC6tBkx6Jdq.Z6MoI9jb2hQHzCzH3c83yH9rieJN7Lm'
  }
]

## Commands to run the code
1. npm i ejs
2. npm i dotenv pg 
3. npm i bcrypt
4. npm i express-session
5. npm i express-flash
6. npm i passport
7. npm i passport-local
