# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `DOCUMENTAION`
There are five page in this Single page application

1.Home page
2.about page
3.Contact page
4.resume page
5.Portfolio page

we can navegate to any page without redirecting to another window.

In portfolio page i have taken th github api to display the reposity of the user(myself)

The Dependcies i have used are

"@babel/plugin-proposal-private-property-in-object": "^7.21.11",
    "@emailjs/browser": "^4.3.3",
    "@fortawesome/free-brands-svg-icons": "^6.5.2",
    "@fortawesome/free-solid-svg-icons": "^6.5.2",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "animate.css": "^4.1.1",
    "axios": "^1.6.8",
    "bootstrap5": "^1.1.9",
    "date-fns": "^3.6.0",
    "gsap-trial": "^3.12.5",
    "loaders.css": "^0.1.2",
    "octokit": "^3.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.1.0",
    "react-leaflet": "^4.2.1",
    "react-loaders": "^3.0.1",
    "react-router-dom": "^6.22.3",
    "react-scripts": "5.0.1",
    "sass": "^1.75.0",
    "web-vitals": "^2.1.4"

    we can download the dependices by using the command
    "npm i 'dependency-name' "


    Software Developer Portfolio Website
Purpose
The purpose of this application is to create a personalized and dynamic portfolio website for showcasing my coding skills, projects, experiences, and professional background as a software developer. The website serves as a platform to demonstrate proficiency in various technologies, communicate with potential employers or collaborators, and provide a comprehensive overview of my work.

How to Contribute
Contributions to the development of this portfolio website are welcome. To contribute, follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix: git checkout -b feature/new-feature or git checkout -b bugfix/issue-description.
Make your changes and commit them: git commit -m "Description of changes".
Push to the branch: git push origin feature/new-feature.
Submit a pull request detailing the changes made.
Features
Home page with a hero section and introduction.
About page displaying personal information and a brief introduction.
Resume page showcasing education, skills, and professional experience.
Portfolio page dynamically fetching and displaying GitHub repositories.
Navigation menu for easy access to different sections.
Responsive design for seamless viewing across devices.


Dependencies
This project uses the following dependencies:

React: JavaScript library for building user interfaces.
React Router: Declarative routing for React applications.
Axios: Promise-based HTTP client for making requests to APIs.
To install dependencies, run npm install in the project directory.

Application Architecture


The application follows a single-page application (SPA) architecture, built using React.js. It consists of multiple components such as Header, Footer, and individual pages (Home, About, Resume, Portfolio). Routing between pages is handled using React Router for client-side navigation. Data fetching from the GitHub API is managed through utility functions in the utils directory.


software-portfolio/
├── public/
├── node_modules
├── src/
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   └── ...
│   ├── utils/
│   │   └── githubApi.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
├── package-lock.json
└── .prettierrc
└── LICENSE.txt


Reporting Issues

If you encounter any issues or bugs while using the application, please report them by opening a new issue on the GitHub repository. Include detailed information about the problem, steps to reproduce it, and any relevant screenshots or error messages.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
