function TodoApp() {
	const [todos, setTodos] = React.useState([]);
	const inputRef = React.useRef(null);

	function addTodo(event) {
		event.preventDefault();
		setTodos([
			...todos,
			{
				id: todos.length,
				value: inputRef.current.value,
			},
		]);
		inputRef.current.value = '';
	}
	function removeTodo(todoId) {
		const todosCopy = [...todos];
		const todoIndex = todosCopy.map((todo) => todo.id).indexOf(todoId);
		todosCopy.splice(todoIndex, 1);
		setTodos(todosCopy);
	}

	return (
		<>
			<h1 className='title'>TODO App</h1>
			<div className='todo-container'>
				<form className='form'>
					<input placeholder='Add TODO' ref={inputRef} />
					<button className='form__button form__button--add' onClick={addTodo}>
						➕
					</button>
				</form>
				<section className='todos'>
					{todos.map((todo) => (
						<div className='todo' key={todo.id}>
							<span className='todo__text'>{todo.value}</span>
							<button
								className='todo__button'
								onClick={() => removeTodo(todo.id)}
							>
								🗑
							</button>
						</div>
					))}
				</section>
			</div>
		</>
	);
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
