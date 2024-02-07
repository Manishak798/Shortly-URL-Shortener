# Short.ly 🚀

Short.ly is a URL shortening service built using Node.js, Express, MongoDB, Mongoose, and EJS, featuring JWT authentication for user authentication.

🔗 [Live Demo]()  

## Features

- **URL Shortening**: Convert long URLs into shorter, more manageable links.
- **JWT Authentication**: Secure authentication using JSON Web Tokens.
- **User-Friendly Interface**: Simple and intuitive user interface for easy navigation.
- **Customizable Short URLs**: Users can choose custom aliases for their shortened links.
- **Statistics**: Track the usage statistics of shortened links.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/short.ly.git
   ```

2. Navigate into the project directory:
   ```bash
   cd short.ly
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```
     PORT=3000
     MONGODB_URI=<your_mongodb_uri>
     JWT_SECRET=<your_jwt_secret>
     ```

5. Start the server:
   ```bash
   npm start
   ```

6. Visit `http://localhost:5555` in your web browser.

## Usage

1. Register for an account or log in if you already have one.
2. Once logged in, paste a long URL into the provided input field and click "Shorten".
3. Optionally, you can customize the shortened URL alias.
4. Copy the shortened URL and share it as needed.
5. To view statistics for a shortened URL, navigate to your dashboard.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [EJS](https://ejs.co/)
- [JSON Web Tokens (JWT)](https://jwt.io/)

## Author

Your Name - [Manishak798](https://github.com/Manishak798)


