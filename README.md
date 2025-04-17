# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in thnpe console.

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

# Git Branching Cheat Sheet

NEW!! 
A quick guide to working with Git branches in our project.

---

## 🟢 Creating and Managing Branches - כדי שכל אחד יוכל לעבוד על הקוד שלו בלי לשנות באמת ולפגוע בקוד המלא

- Create a new branch:  
  `git branch <branch-name>`

- Create and switch to a new branch (most common):  
  `git checkout -b <branch-name>`

- Switch between branches:  
  `git checkout <branch-name>`

- See all local branches:  
  `git branch`

- Delete a local branch (after merge):  
  `git branch -d <branch-name>`

---

## 🛠 Working on Your Branch

- Stage all changes for commit:  
  `git add .`

- Commit your changes with a message:  
  `git commit -m "Your commit message here"`

- Push your new branch to GitHub:  
  `git push origin <branch-name>`

---

## 🔁 Merging Branches

- Switch to the main branch:  
  `git checkout main`

- Merge your branch into main:  
  `git merge <branch-name>`

- Delete a remote branch (after PR is merged):  
  `git push origin --delete <branch-name>`

---

## 🌐 Working with GitHub

- Push a new branch to GitHub and set upstream:  
  `git push -u origin <branch-name>`

- Open a Pull Request:  
  Go to GitHub and click "Compare & pull request"

- Pull the latest changes from the server:  
  `git pull`

---

## 💡 Good Practices

- Always create a new branch for each feature or fix – **don’t work on `main`**.
- Use meaningful branch names, like:  
  `feature/navbar`, `fix/login-error`, `refactor/utils`
- Keep `main` updated regularly:
  ```bash
  git checkout main
  git pull
