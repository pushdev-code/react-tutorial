# Conditional rendering

In React you can render different elements depending on whether a condition is met or not.
You can use JavaScript operators like `if` or the `conditional operator` to render different Components.

For example:

```js
  function Greeting({ age }) {
    const isAdult = age >= 18;
    if (isAdult) {
      return <h1>Hey, you are an adult! 🍻</h1>;
    }
    return <p>Hi, please come back when you turn 18.</p>;
  }

  ReactDOM.render(
    // Try changing to age={19}:
    <Greeting age={17} />,
    document.getElementById('root')
  );
```

## Common use cases

- Rendering external data (from an API).
- Toggling app functionality (Showing or hiding elements).
- Implementing permission levels.
- Handling authentication and authorization.

## Element Variables

You can use variables to store components. Based on a condition the value of this variable will change.

```js
function LikedButton({ onClick }) {
    return (
      <button onClick={onClick}>
        👍🏻
      </button>
    );
  }

  function RegularButton({ onClick }) {
    return (
      <button onClick={onClick}>
        Like
      </button>
    );
  }

  function App(){
    const [like, setLike] = React.useState(false);
    function handleLike() {
      setLike(true);
    }

    function handleDislike() {
      setLike(false);
    }

    // we are using the ternary operator to assing the Component to the button variable
    let button = like ? <LikedButton onClick={handleDislike}/> : <RegularButton onClick={handleLike}/>;
    return (
      <>
        <h1>Conditional Rendering</h1>
        {button}
      </>
    );
  }

  ReactDOM.render(<App/>, document.getElementById('root'));
```

## Inline If with Logical && Operator (Short Circuit Evaluation)

`true && expression` always evaluates to expression, and `false && expression` always evaluates to false.

```js
  function App() {
    // change isLoggedIn to false
    const isLoggedIn = true;
    return (
       <div>
        <h1>Conditional Rendering in React.</h1>
        {isLoggedIn && <button>Logout</button>}
      </div>
    );
  }
```

## Inline If-Else with Conditional Operator

Let's take a look at the example described above.

```js
function Greeting({ age }) {
    const isAdult = age >= 18;
    if (isAdult) {
      return <h1>Hey, you are an adult! 🍻</h1>;
    }
    return <p>Hi, please come back when you turn 18.</p>;
  }

  ReactDOM.render(
    // Try changing to age={19}:
    <Greeting age={17} />,
    document.getElementById('root')
  );
```

Another method for conditionally rendering elements inline is to use the JavaScript [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) `condition ? true : false`.

```js
function Greeting({ age }) {
    const isAdult = age >= 18;
    return(
      <>
      {isAdult ? <h1>Hey, you are an adult! 🍻</h1> : <p>Hi, please come back when you turn 18.</p>}
      </>
    );
  }

  ReactDOM.render(
    // Try changing to age={19}:
    <Greeting age={17} />,
    document.getElementById('root')
  );
```

## Using a switch Statement

You can specify the markup for the return statement for various conditions.

```js
function Greeting({ age }) {
    const label = age <= 5 ? 'baby' : age <= 18 ? 'young' : 'adult';
    switch (label) {
      case ('baby'):
        return <h1>Hey, you are a baby! 👶🏻</h1>;
        break;
      case ('young'):
        return <p>Hey, you are young. 🍻</p>;
        break;
      default:
        return <span>Hey, you are an adult 🧔🏻.</span>;
    }
  }

  ReactDOM.render(
    // Try changing the age
    <Greeting age={18} />,
    document.getElementById('root')
  );
```

## Preventing Component from Rendering

You can return `null` to prevent a Component from Rendering.

```js
  function App() {
    // change the initial state to false
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);
    if(!isLoggedIn) return null;
    return (
      <> 
        <button onClick={() => setIsLoggedIn(false)}>Logout 🔴</button>
      </> 
    )  
  }

  ReactDOM.render(<App/>, document.getElementById('root'));
```

## Exercise

1. In your forked `react-tutorial` repo, create a new branch named `feature/7-conditional-rendering`.
2. Create an `index.html` file within the `7-conditional-renderin` folder.
3. You should create a login functionality, where you click a `login` button and you will see the Video Component you just created for the functional components section.
4. Once you log in you should see the Video Component and a `logout` button. When you click the logout button you should not see the Video anymore.
5. You should use PropTypes.
6. You should use Functional Components and useState hook.
7. Push your changes and create the Pull Request.

## Sources
- [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html).
- [7 Ways to Implement Conditional Rendering in React Applications](https://www.digitalocean.com/community/tutorials/7-ways-to-implement-conditional-rendering-in-react-applications).
