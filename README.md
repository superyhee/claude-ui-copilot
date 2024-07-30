# UI Copilot

<img width="100%" alt="image" src="./images/home.png">

A tool built with React and Vite, complemented by a backend service using the Express framework, which convert text, screenshots, and Figma designs into clean, functional code using AI. It is based on a conversational approach, allowing you to continuously adjust the page effects.
Now supporting AWS bedrock and Claude Sonnet 3.5

[Watch the video](https://www.youtube.com/watch?v=hoifXP5bXIU)

#### Supported stacks:

- React + Mui
- React + Tailwind
- React + Mermaid
- React + Poltly

## Prerequisites

Make sure you have Node.js (version 18 or above) and Docker (optional, but recommended) installed in your development environment.An API key from Anthropic or AWS account access key secret key;

1. Clone the repository:

   ```shell
   git clone https://github.com/mattzcarey/code-review-gpt.git
   cd code-review-gpt
   ```

2. Set up the API key:

   ```shell
   cd server
   ```

3. Open the .env file and
   - Rename the .env.example file to .env.
   - Replace ANTHROPIC_KEY with your actual Anthropic api key or replace AK and SK with you AWS account.
   - If running within Docker, set the parameter IS_DOCKER_ENV to true, otherwise set it to false.

## Start with Docker

It is highly recommended to use Docker for a one-click start.In the root directory of the project:

```sh
docker-compose up -d --build
```

## Start without Docker

In the root directory of the project, install dependencies and start the frontend and backend separately:

```sh
# Install frontend dependencies
cd frontend
npm install
npm run dev

# Install backend dependencies
cd ../server
npm install
npm run dev
```

Open your browser and visit http://localhost:9000 to see the frontend page.

## TODO

- [ ] Support more component generation for Angular, and other frontend frameworks.

## Reporting Issues

Encountered a bug? I love to hear about it. Please follow these steps to report any issues:
Your report will help us make the project better for everyone.

## Feature Requests

Got an idea for a new feature? Feel free to suggest it. Your suggestions for improvements are always welcome.

## Security

Your security is important to us. If you discover a security vulnerability. Please refrain from disclosing any vulnerabilities publicly until said vulnerability has been reported and addressed.

## License

Licensed under the MIT License.

## Support

If you find this project helpful, you can buy the author a cup of coffee to show your support.

<img width="30%" alt="image" src="./images/bmc_qr.png">
