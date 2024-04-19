# News App

This is a simple news application that allows users to browse and read news articles.

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/newsapp.git
    ```
    ```bash
    git clone https://github.com/nbisawesome/newsapp-server
    ```

2. Navigate to the project directory:

    ```bash
    cd newsapp
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory of the project and add the following environment variables:

    ```plaintext
    VITE_API_KEY=84bc2cfc4f3b4973ae828bdc1e3190ab
    VITE_BASE_URL=http://localhost:3000 
    ```

    Make sure to replace `VITE_API_KEY` with your actual API key.

    `VITE_BASE_URL` is the address to the web server present at [https://github.com/nbisawesome/newsapp-server](https://github.com/nbisawesome/newsapp-server)
    Its a simple nodejs web server that bypasses the cors mechanism that the news api expects.Because newsapi does not allow traffic from hosted application just
    application running in localhost.

## Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access the application.

## Deployment

The application is deployed using Vercel and can be accessed at [https://newsapp-iota-lemon.vercel.app/](https://newsapp-iota-lemon.vercel.app/).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
