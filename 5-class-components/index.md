# Class Components

A Class Component requires you to extend from React library. They have a different structure than the Functional Components.

- Using [ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) and common functions you can build Class Components.
- Functional Components are a JavaScript function that returns JSX.
## How to use Class Components?

```js
  class Greeting extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
```

- We should **extend** from `React.Component`. The **extends** keyword is used in class declarations or class expressions to create a class that is a child of another class, [check Developer Mozilla for details](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends). That means your Class Component will have the functionalities provided by React.Component.
- It must use the `render()` method returning JSX.
- Accessing `props` is different, you need to use **this** keyword to refer them. In Functional Components, we were receiving them as parameters.

## More examples with Class Components

```js
class Card extends React.Component {
    render() {
      // destructuring elements is a good practice to avoid dot accessing across the whole render method
      const { title, src } = this.props;
      return (
        <>
          <h1>🎵 {title} 🎵</h1>
          <iframe
            src={src}
            height="250"
            frameBorder="0"
            allow="encrypted-media"
          >
          </iframe>
        </>
      )
    }
   };

   const cards = [
     {
      id: 0,
      title:'Podcast',
      src:'https://open.spotify.com/embed-podcast/show/6HOxtj2TQHFOsdPLb73C1E'
     }, 
     {
      id: 1,
      title:'The Smiths',
      src:'https://open.spotify.com/embed/track/1FvDJ9KGxcqwv1utyPL3JZ'
     },
      {
      id: 2,
      title:'The Strokes',
      src:'https://open.spotify.com/embed/track/1aOxOpH4AkGAd8OMrKjyNY'
     }
   ];

  const cardsComponents = cards.map(card => <Card key={card.id} title={card.title} src={card.src}/>);
  ReactDOM.render(<>{cardsComponents}</>, document.getElementById('root'));
```

**Rendering Multiple Components**
We are using the [key](https://reactjs.org/docs/lists-and-keys.html) property to identify each one of the components in the array. Why we need to use it?:

- Keys help React identify which items have changed, are added, or are removed.
- It uniquely identifies a list item among its siblings.

## Differences between Class Components and Functional Components
## Syntax

- Classes Components: You will need to use ES6 `classes`, `render`/`this` keyword, and some other stuff described in the next chapters.
- Functional Components: You only need a plain JS function returning JSX.
## Passing Props

- Class Components: We will need to use the **this** keyword since we are working with classes.

```js
class Greeting extends React.Component {
  render() {
    const { name } = this.props;
    return <h1>Hello, { name }</h1>;
 }
}
```

- Functional Component: You will receive the `props` as arguments of the function.

```js
const Greeting = ({ name }) => {
 return <h1>Hello, {name}</h1>;
};
```

### State managing

The **state** is a plain JavaScript object where you store property values that belongs to each component. You can perform side-effects tasks when the state object changes.

It will be discussed deeper in the next section.

**State in Class Components**

```js
class Counter extends React.Component {
  /* you must use the constructor and super keyword since we need to access and call functions on an object's parent. */
 constructor(props) {
   super(props);
   // here we initialize our state object
   this.state = {
     count: 0
   };
 }

 render() {
   return (
     <div>
       <p>You clicked {this.state.count} times</p>
       <button onClick={() => this.setState({ count: this.state.count + 1 })}>
         Increment the counter
       </button>
     </div>
   );
 }
}
```

**State in Functional Components**

```js
function Counter() {
  // we are using useState hook to handle the state
  const [count, setCount] = React.useState(0);
   return (
     <div>
       <p>You clicked {count} times</p>
       <button onClick={() => setCount(prevCount => prevCount + 1)}>
         Increment the counter
       </button>
     </div>
   );
  }
```

### Lifecycle methods

It will be described later in the next chapters. Basically, each component will have three main phases in its lifecycle.

**Class Components Lifecycle methods**

- Mounting: `componentDidMount`
- Updating: `componentDidUpdate`
- Unmounting: `componentWillUnmount`

**Hooks**

- Mounting, Updating, and Unmounting: `useEffect`
## Which one is better?

It does not mean that one is better than the other, but we should be aware of the differences between them to choose which one would fit our project needs.

However, [React team encourage developers to adopt React Hooks](https://reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both) whenever possible.

## Exercise

1. In your forked `react-tutorial` repo, create a new branch named feature/class-components.
2. Create an `index.html` file within the `5-class-components` folder.
3. You should refactor the Functional Components you created in the last section.
5. You should use React PropTypes.
6. You should render various elements with an array using the Video Class Component.
7. Extra Mile: add a functionality playing with the React State for the Video Class Component (Adding and removing Video elements).
8. Push your changes and create the Pull Request.
