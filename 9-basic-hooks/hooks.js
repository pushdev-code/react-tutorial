// Hooks: https://reactjs.org/docs/hooks-reference.html

// useRef
// https://reactjs.org/docs/hooks-reference.html#useref
/**
 *
 * The useRef Hook allows you to persist values between renders.
 * It can be used to store a mutable value that does not cause a re-render when updated.
 * It can be used to access a DOM element directly.
 * EG. try to count the number of times your apps renders
 * E.G acess the previous state.
 * E.G access the dom.
 */

function CountRenderApp() {
	const [inputValue, setInputValue] = React.useState('');
	const count = React.useRef(0);

	React.useEffect(() => {
		count.current = count.current + 1;
	});

	return (
		<>
			<input
				type='text'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<h1>Render Count: {count.current}</h1>
		</>
	);
}
function EffectApp() {
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
					setInputValue(e.target.value);
				}}
			/>
		</>
	);
}

// useContext
// Context provides a way to pass data through
// the component tree without having to pass props down manually at every level.
// You could have multiples context.

// Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
// https://reactjs.org/docs/context.html
const themes = {
	light: {
		color: 'dark',
		background: 'white',
	},
	dark: {
		color: 'white',
		background: 'dark',
	},
};

const ThemeContext = React.createContext(themes.light);

function ContextApp() {
	const [theme, setTheme] = React.useState(themes.light);

	const toggleTheme = () => {
		setTheme(theme === themes.light ? themes.dark : themes.light);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<MyComponent />
		</ThemeContext.Provider>
	);
}

function MyComponent() {
	const { theme, toggleTheme } = React.useContext(ThemeContext);
	console.log({ theme, toggleTheme });

	return <button onClick={toggleTheme}>I am styled by theme context!</button>;
}

// useReducer
// An alternative to useState. Accepts a reducer of type (state, action) => newState,
// and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)

// useReducer is usually preferable to useState when you have complex state
// logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger
// deep updates because you can pass dispatch down instead of callbacks.
const initialState = { count: 0 };

// reducer = previous state and an action. Then they reduce it (read it return) to one entity: the new updated instance of state.
function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
}

function Counter() {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	return (
		<>
			Count: {state.count}
			<button onClick={() => dispatch({ type: 'decrement' })}>-</button>
			<button onClick={() => dispatch({ type: 'increment' })}>+</button>
		</>
	);
}

// custom hook
// whatever logic we need. Reusable
// useTracks is a custom hook that could be extended beyond tracks feature if needed.
const STATUS_OPTIONS = {
	LOADING: 'loading',
	ERROR: 'error',
	SUCCESS: 'success',
	IDLE: 'idle',
};

// This API_URL should be saved in a env variable.
const API_URL =
	'https://jsonplaceholder.typicode.com/albums/1/photos?id=1&id=2&id=3&id=4&id=5&id=6';

/**
 * This is a function that fetchs a URL and returns its response's data.
 * @param {string} url
 * @example
 * fetchURL('https://pokeapi.co/api/v2/pokemon?limit=10').then(data => console.log(data))
 */

async function fetchAPI(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error(`Error fetching the URL: ${error}`);
	}
}

function useTracks() {
	const [status, setStatus] = React.useState(STATUS_OPTIONS.IDLE);
	const [data, setData] = React.useState(null);

	const fetchTracks = async () => {
		try {
			setStatus(STATUS_OPTIONS.LOADING);
			const responseData = await fetchAPI(API_URL);
			setData(responseData);
			setStatus(STATUS_OPTIONS.SUCCESS);
		} catch (error) {
			setStatus(STATUS_OPTIONS.ERROR);
		}
	};

	React.useEffect(() => {
		fetchTracks();
	}, []);

	return {
		status,
		data,
	};
}

function CustomHook() {
	const { status, data } = useTracks();
	console.log({ status, data });
	return <h1>Hello</h1>;
}

ReactDOM.render(<CountRenderApp />, document.getElementById('root'));
console.log('Hi');
