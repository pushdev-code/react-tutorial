# Create react app

[Create React App](https://reactjs.org/docs/create-a-new-react-app.html) is an environment that comes pre-configured with everything we need to build a React app:

- Package Manager (yarn or npm).
- Bundler (Webpack) for optimizing the output of our JavaScript for production.
- Compiler (Babel) to write modern JavaScript features that still work in older browsers.
- Live CSS and JS editing.
- Output Optimization.
- Testing Library.

Run the following command in your terminal to set up [create-react-app](https://github.com/facebook/create-react-app)

```bash
npx create-react-app my-first-react-project
```

Note: **You’ll need to have Node 14.0.0 or later version** on your local development machine (but it’s not required on the server). We recommend using the latest LTS version. You can use nvm (macOS/Linux) or nvm-windows to switch Node versions between different projects.

Then you can run your React project

```bash
cd my-first-react-project && npm start
```

When you’re ready to deploy to production, you can run the following command to create the optimized build of your app.

```bash
npm run build
```

If you want to check details under the hood for creating a React app from scratch you can check out [this Medium post](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658).

## Project structure

```
my-first-react-project
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── robots.txs
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

- `manifest.json`: This is a JSON file in your website that tells the browser about your website on user's mobile device or desktop (how to treat name, icons, etc.). 
Source: [What is manifest.json file and how it is useful](https://hackthestuff.com/article/what-is-manifest-json-file-and-how-it-is-useful).
- `robots.txt`: txt file that tells search engine crawlers which URLs on your site they can access. Mainly, it is used to prevent requests that your site receives from overloading it.
Source: [Introduction to robots.txt files](https://developers.google.com/search/docs/advanced/robots/intro)
- `serviceWorker.js`:  A service worker is a script that your browser runs in the background, separate from a web page, opening the door to functions that do not require a web page or user interaction. They are used for offline experiences.  Service workers are what make Progressive Web Apps so amazing. Basically, a service worker is a script that is run by the browser in the background. It does not interact with the actual app and even the usual user won’t know anything about it.
Source: [What is a service worker](https://developers.google.com/web/fundamentals/primers/service-workers). [Using Service Workers with create-react-app](https://blog.bitsrc.io/using-service-workers-with-react-27a4c5e2d1a9)
- `reportWebVitals.js`: Web Vitals are a set of useful metrics that aim to capture the user experience of a web page. It allows you to measure and analyze the performance of your application using different metrics (e.g. Chrome User Experience Report, Page Speed Insights, Search Console's Speed Report).
Source: [Measuring Performance](https://create-react-app.dev/docs/measuring-performance/)

## When to use Create React App

Create React App is a great fit for:

- Learning React in a comfortable and feature-rich development environment.
- Starting new single-page React applications.
- Creating examples with React for your libraries and components.

Common cases where you might try something else:

- If you want to do server-side rendering with React and Node.js, check out Next.js or Razzle. Create React App only produces static HTML/JS/CSS bundles.

- If your website is mostly static (for example, a portfolio or a blog), consider using Gatsby or Next.js. Gatsby pre-renders the website into HTML at build time. Next.js supports both server-side rendering and pre-rendering.

## Exercise

1. Create a new react app with the [create-react-app](https://github.com/facebook/create-react-app) command, which means you should use a different repository.
2. Attach a remote repository with the current project you just created.
3. Give access to `@juancho11gm`, `@fabianmarinog` and `@pushdev-code` accounts in the `settings/manage access` tab.
4. Commit and push to the `main` branch the initial setup without any changes. 
5. Create a new branch named feature/create-react-app.
6. Remove the initial content in the `App.css` and `App.js` files.
7. You should render the following content into the DOM through the `App.js` file. You **must** use JSX.

```html
<body>
  <div id="root">
    <div class="list-container">
      <ul class="list">
        <li class="list__item">Hello</li>
        <li class="list__item">Push</li>
      </ul>
    </div>
  </div>
</body>
```

9. Commit, push your changes, and create the Pull Request. Add @juancho11gm, @fabianmarinog and @pushdev-code  as reviewers of the Pull Request.

## Sources

- [Create React App code repository](https://github.com/facebook/create-react-app)
- [Create React App docs](https://reactjs.org/docs/create-a-new-react-app.html)