# Props vs State

We have been using props in our React Components, but what's the actual difference between the Props and the State?

## Props (Short for properties)

`props` is an object passed to a React Component by its parent Component.

- `props` should not change.

In Functional Components

```js
function Child(props) {
	console.log('Props', props);
	return <div>Child</div>;
}

<Child name='Push Dev' year='2021' />;
```

In Class Components

```js
class Child extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		return <div>Child</div>;
	}
}

<Child name='Push Dev' year='2021' />;
```

## State

`state` is still variables but initialized and managed by the React Component. The `state` will change over time.

- With the State you can keep track of information between renderings, so the component itself can create, update, and use state.
- `state` is changeable.

In Functional Components

```js
  function Child(props) {
    // destructure the props
    const { age } = props;
    // we must use the useState hook
    const [ageState, setAgeState] = React.useState(age);
    return (
      <>
        <h1>Your age: {ageState}</h1>
        <form>
          <label htmlFor="age">Enter your age.</label>
          <input id="age" name="age" type="number" onChange={e => setAgeState(e.target.value)} />
        </form>
      </>
    );
  }

  ReactDOM.render(<Child /* default age */ age={18}/>
```

In Class Components

```js
  class Child extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        age: 18
      };
    }

    render() {
      return (
        <>
          <h1>Your age: {this.state.age}</h1>
          <form>
            <label htmlFor="age">Enter your age.</label>
            <input id="age" name="age" type="number" onChange={e => this.setState({ age: e.target.value })} />
          </form>
        </>
      );
    }
  }

  ReactDOM.render(<Child /* default age */ age={18}/>
```

### Lifting state

When the state is shared between components, React team encourage to lift the state to their closest common ancestor.

Example: https://reactjs.org/docs/lifting-state-up.html.

## Sources

- [React state vs props](https://flaviocopes.com/react-state-vs-props/)
