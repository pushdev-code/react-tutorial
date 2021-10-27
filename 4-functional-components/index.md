# Functional Components

## What is a Component?
Components allow to split the UI into independent, reusable pieces and think about each piece in isolation. Think about this example:

<img width="1515" alt="Screen Shot 2021-10-26 at 5 30 08 PM" src="https://user-images.githubusercontent.com/36536646/138970243-bb3db7c3-6a82-49d1-95b1-eba9b39ac64c.png">

Youtube website is using a video component that keeps its structure. It only changes its content, and the following elements are reused in each video preview:

![Screen Shot 2021-10-26 at 5 34 58 PM](https://user-images.githubusercontent.com/36536646/138970743-c49d5d73-ae5d-41fd-9d71-2e0840ca763b.png)

- Image cover
- Video duration
- Title
- Channel
- Views
- How long ago was it uploaded

## What is a Functional Component?

React lets us define components as classes or functions. So, basically with Functional Components, a function will return a Component. Let's look at an example:

```js
   function Greeting({children}) {
      return <div className="greeting">Hello {children}</div>
    }

    const containerElement = (
      <div className="container">
        {React.createElement(Greeting, {children: 'JuanG'})}
        {React.createElement(Greeting, {children: 'PushDev'})}
      </div>
    )

    ReactDOM.render(containerElement, document.getElementById('root'));
```

`Greeting` is a Functional Component. It uses JSX to render the 'div' element.
We can spread the greeting Component properties like this:

```js
    function Greeting(props) {
      return <div {...props} />
    }

    const children = 'Push';
    const className = 'greeting';
    const props = { children, className };

    ReactDOM.render(Greeting(props), document.getElementById('root'));
```

We can also create Components using [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) d d :

```js
    const Pet = ({name}) => <h1>{name} 🐶</h1>
    ReactDOM.render(Pet({name: 'Coco'}), document.getElementById('root'));
```

## Using the Components in JSX

Now that you know how to create Components, you can use them like this:

```js
    function Pet({name}) {
      return <h1>{name} 🐶</h1>
    } 

    ReactDOM.render(<Pet name='Coco'/>, document.getElementById('root'));
```
> Note: Components names must begin with Capital Letters

- `<pet />` compiles to React.createElement('pet') (html tag)
- `<Pet />` compiles to React.createElement(Pet)

## PropTypes

In order to do [type checking](https://blog.logrocket.com/javascript-typeof-2511d53a1a62/), you can use `React PropTypes`. It will help you check the type of your props within your Components.

```js
    function Pet({name}) {
      return <h1>{name} 🐶</h1>
    }
    
    Pet.propTypes = {
      name: PropTypes.string.isRequired
    };

    ReactDOM.render(<Pet name='Coco'/>, document.getElementById('root'));
```
> Note: you will need to use [PropTypes](https://www.npmjs.com/package/prop-types) or you can add the following script: `<script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>`


- If you provide a different type it will throw an error.
- Let's take a look at the [different validators](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes) provided by PropTypes.

## Composing Components

```js
function Header({ title }){
      return (
        <header>
          <h1>{title} ⭐️</h1>
        </header>
      );
    }

    Header.propTypes = {
      title: PropTypes.string.isRequired
    };

    function Footer({ description }){
      return (
        <footer>
          <p>{description} 👋🏻</p>
        </footer>
      );
    }

    Footer.propTypes = {
      description: PropTypes.string.isRequired,
    };

    function Content({ imageSource, description }){
      return (
        <main>
          <figure>
            <img src={imageSource} alt={description} width='300'/>
          </figure>
          <figcaption>
            {description}
          </figcaption>  
        </main>
      )
    }

    Content.propTypes = {
      imageSource: PropTypes.string.isRequired,
      description: PropTypes.string
    };

    function Website(){
      return (
        <>
          <Header title='PusDev'/>
          <Content 
            imageSource='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png' 
            description='React tutorial'
          />
          <Footer description='Made with Love 💙'/>
        </>
      );
    }
    
    ReactDOM.render(<Website/>, document.getElementById('root'));
```

## Exercise

1. In your forked `react-tutorial` repo, create a new branch named `feature/4-functional-components`.
2. Create an `index.html` file within the `4-functional-components` folder.
3. Create a Video Functional Component, that must have the Youtube video properties described in the first section [What is a Component?](#what-is-a-component).
4. You can split the Video component into different components.
5. You should use PropTypes.
6. Create various elements using the Video Component, sending the data through the props.
7. Push your changes and create the Pull Request.

## Sources

- [Components and props](https://reactjs.org/docs/components-and-props.html)
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
