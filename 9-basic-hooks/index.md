# Basic Hooks

Hooks are a new addition to React 16.8. Hooks are a new API that allows us to have state, and other React features, in `Functional Components`.

- You can still use classes, but hooks are recommended.
- Complex components become hard to understand with Classes.
- Hooks let you split one component into smaller functions based on what pieces are related.
- You have to understand how this works in JavaScript.
- You have to remember to bind the event handlers.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Took <a href="https://twitter.com/dan_abramov?ref_src=twsrc%5Etfw">@dan_abramov</a>&#39;s code from <a href="https://twitter.com/hashtag/ReactConf2018?src=hash&amp;ref_src=twsrc%5Etfw">#ReactConf2018</a> and visualised it so you could see the benefits that React Hooks bring us. <a href="https://t.co/dKyOQsG0Gd">pic.twitter.com/dKyOQsG0Gd</a></p>&mdash; Pavel (@prchdk) <a href="https://twitter.com/prchdk/status/1056960391543062528?ref_src=twsrc%5Etfw">October 29, 2018</a></blockquote>

## Hooks rules

- Only call Hooks at the top level. 
- Don’t call Hooks inside loops, conditions, or nested functions.
- Only call Hooks from React function components.
- You can create custom hooks.

## Hooks Flow

This flowchart explains the lifecycle of a Hooks component.

![Hook Flow](../public/hook-flow.png)


## State Hook

The React `useState` Hook allows to track state in a function component. `State` generally refers to data or properties that need to be tracked through the application.

```js
  function Example() {
    // We are going to use the "count" variable and the "setCount" function.
    // useState hook will always return a pair of values: 
    // the current state and a function that updates it. We are using array destructuring.
    // The only argument to useState is the initial state.
    const [count, setCount] = React.useState(0);
    return <p>{count}</p>
  }
```

You can use multiple `useState` Hooks in the same component. Let's take a look at the example below.

```js
   function Form() {
    const [values, setValues] = React.useState({
      name: '',
      age: null
    });

    function handleOnChange(event) {
      const { target: { value, name } } = event;
      setValues({
        ...values,
        [name]: value
      });
    }

    function handleOnSubmit(event) {
      event.preventDefault();
      console.log('>>> Values', values);
    }

    const element = (
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="string" onChange={handleOnChange}/>
        <label htmlFor="age">Age</label>
        <input id="age" name="age" type="number" onChange={handleOnChange}/>
        <button type="submit">
          Submit
        </button>
      </form>
    );

    return element;
  }
```

- We highly recommend visiting the [Frequently asked questions](https://reactjs.org/docs/hooks-state.html)

## Effect Hook

The `useEffect` Hook allows performing side effects in your components.

Common use cases:
- Fetch data.
- Directly update the DOM.
- Timers.

**Effects without cleanup**

```js
  useEffect(() => {
    //Runs on every render
  });

  useEffect(() => {
    //Runs only on the first render
  }, []);

  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
  }, [prop, state]);
```

**Effects with cleanup**

```js
  useEffect(() => {
    //Runs on Unmounting
    return () => {
      //Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
    }
  });
```

You can use multiple `useEffect` hooks in the same component. Let's take a look at the example below.

```js
const POKEMON_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

function PokemonCard(props) {
  const { name, sprites } = props;

  React.useEffect(() => {
    console.log('>>> Pokemon updated');
  });

  return (
    <div key={name}>  
      <img src={sprites.other.dream_world.front_default} alt={`${name} image`} width="200"/>  
      <p>{name}</p> 
    </div>
  );
}

function App () {
  const [pokemons, setPokemons] = React.useState([]);
  React.useEffect(async () => {
    await fetchPokemons();
    console.log('>>> Pokemons fetched');
  }, []);

  async function fetchPokemonData({ url }) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      setPokemons([]);
    }
  }
  
  async function fetchPokemons() {
    // Changing the state
    try {
      const response = await fetch(POKEMON_ENDPOINT);
      const data = await response.json();
      const pokemonsDetailed = [];
      for (const pokemon of data.results) {
        const pokemonData = await fetchPokemonData(pokemon);
        pokemonsDetailed.push(pokemonData);
      }
      setPokemons(pokemonsDetailed);
    } catch (error) {
      setPokemons([]);
    }
  };

  const element = pokemons.length === 0 ? <p> Loading... </p> : pokemons.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon}/>)

  return (
    <div>
      {element}      
    </div>
  );
}
```

## useRef Hook

The `useRef` hook allows creating a reference to the DOM element. It can be used to access a DOM element directly.

```js
// It returns an Object called current.
const refContainer = useRef(initialValue);
```

```js
 function App() {
    const [inputValue, setInputValue] = React.useState('');
    const name = React.useRef(null);

    return (
      <>
        <h1>Input value: {name.current?.value || ''}</h1>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          value={inputValue}
          ref={name}
          onChange={(e) => {
            // printing the object props
            console.dir(name.current);
            setInputValue(e.target.value)
          }}
        />
      </>
    );
  }
```

In general, we want to let React handle all DOM manipulation, instead of querying the DOM.

```js
  function App() {
    const inputElement = React.useRef();

    const focusInput = () => {
      inputElement.current.value = "Now I'm being focused.";
      inputElement.current.focus();
    };

    return (
      <>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </>
    );
  }
```

> The `useRef` Hook can also be used to keep track of previous state values.

## Exercise

1. In your forked `react-tutorial` repo, create a new branch named feature/basic-hooks.
2. Create an `index.html` file within the `8-component-lifecycle` folder.
3. You should create the following App and Child Components using the React hooks described in this section.

![Hooks flow exercise](../public/hooks-flow.gif)

4. Push your changes and create the Pull Request.

## Sources

- [Hooks Intro](https://reactjs.org/docs/hooks-intro.html)
- [Epic React](https://epicreact.dev/learn)