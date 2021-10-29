# Syntax and Basic Constructs

<img alt="react icon" src="../public/react-icon.png" width="200">

## What is React?

React is a JavaScript library for building user interfaces. It's based on components, which means custom and reusable UI elements managing its state out of the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) can be created.

React is open-source, and [it's maintained by Facebook](https://github.com/facebook/react).

Main properties: 

- React is declarative (simple, predictable and easy to debug)
- React is component based
- React supports server-side rendering
- React is fast 
- React is easy to learn 

# Syntax

What if we want to add HTML elements through JavaScript?. We will need to interact with the [DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

**Using Vanilla JavaScript**

```html
<body>
  <script type="module">
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.append(root);

    const div = document.createElement('div');
    div.className = 'container';
    div.textContent = 'Hello Push';
    root.append(div);
  </script>
</body>
```

**Using React**

```html
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
  <script type="module">
    const rootElement = document.getElementById('root')
    const element = React.createElement('div', {
      className: 'container',
      children: 'Hello Push',
    })
    ReactDOM.render(element, rootElement)
  </script>
</body>
```

What are those two additional scripts?

We are including both **React** and **ReactDOM**, which are available over a CDN. [CDN Links](https://reactjs.org/docs/cdn-links.html)

- React: responsible for creating React elements (document.createElement())
- ReactDOM: responsible for rendering React elements to the DOM (rootElement.append())

## Tip for production environments

Ensure that the deployed HTML loads the versions of React ending in [production.min.js](https://reactjs.org/docs/add-react-to-a-website.html#tip-minify-javascript-for-production):

```html
<script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
````

## Exercise

1. In your forked `react-tutorial` repo, create a new branch named feature/syntax-basics-exercise.
2. Create a `index.html` file within the `1-syntax-and-basics` folder.
3. Figure out how to write the JavaScript + React code to generate this DOM output:

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

4. Push your changes and create the Pull request.

## Sources

- [React docs](https://reactjs.org/docs/getting-started.html)