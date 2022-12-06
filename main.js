const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

function PokemonCard({ name, sprites }) {
	const [show, setShow] = React.useState(true);

	React.useEffect(() => {
		console.log('>>> Pokemon was updated');

		return () => {
			console.log('>>> Pokemon was unmounted');
		};
	});

	return (
		show && (
			<div>
				<img
					src={sprites.other.dream_world.front_default}
					alt={name}
					onClick={() => setShow(!show)}
				/>
				<p>{name}</p>
			</div>
		)
	);
}

function Pokemon() {
	const [pokemons, setPokemons] = React.useState([]);
	const { data: pokemonsUrls, status: pokemonsUrlsStatus } = useFetch({
		url: ENDPOINT,
	});

	React.useEffect(() => {
		async function fetchPokemons() {
			try {
				const pokemonsArray = [];
				for (const pokemon of pokemonsUrls.results) {
					const pokemonDataResponse = await fetch(pokemon.url);
					const pokemonData = await pokemonDataResponse.json();
					pokemonsArray.push(pokemonData);
				}

				setPokemons(pokemonsArray);
			} catch (error) {
				setPokemons([]);
			}
		}

		fetchPokemons();
	}, [pokemonsUrls]);

	if (
		(pokemonsUrls === null) |
		(pokemonsUrlsStatus === STATUS.LOADING) |
		(pokemons.length === 0)
	)
		return <span className='loading'></span>;

	const pokemonListComponent = pokemons.map((p, i) => (
		<PokemonCard key={`${p.name}-${i}`} name={p.name} sprites={p.sprites} />
	));

	return <div>{pokemonListComponent}</div>;
}

// customHook.js

const STATUS = {
	LOADING: 'loading',
	ERROR: 'error',
	SUCCESS: 'success',
	IDLE: 'idle',
};

/**
 *	This hook manages fetch APIs with different Status.
 *
 * @param {string} Object.url
 * @return { Object } Object.data
 * @return { STATUS } Object.status
 *
 * @example
 * useFetch({ url: 'https://pokeapi.co/api/v2/pokemon' })
 */

function useFetch({ url }) {
	const [status, setStatus] = React.useState(STATUS.IDLE);
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		async function fetchData() {
			try {
				setStatus(STATUS.LOADING);
				const response = await fetch(url);
				const data = await response.json();
				setData(data);
				setStatus(STATUS.SUCCESS);
			} catch (error) {
				setData(null);
				setStatus(STATUS.ERROR);
			}
		}

		fetchData();
	}, []);

	return { data, status };
}

function UseRefComponent() {
	const count = React.useRef(0);
	const inputElement = React.useRef(null);
	const [state, setState] = React.useState('');

	React.useEffect(() => {
		count.current = count.current + 1;
	});

	return (
		<>
			<form>
				<input
					type='text'
					value={state}
					onChange={(e) => setState(e.target.value)}
					ref={inputElement}
				/>
			</form>
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UseRefComponent />);
