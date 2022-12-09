import React from 'react';
import { createRoot } from 'react-dom/client';
import styles from './styles.module.css';

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

	console.log(styles);

	return (
		<>
			<h1 className={styles.title}>TODO App</h1>
			<div className={styles.todoContainer}>
				<form className={styles.form}>
					<input placeholder='Add TODO' ref={inputRef} />
					<button
						className={`${styles.formButton} ${styles.formButtonAdd}`}
						onClick={addTodo}
					>
						➕
					</button>
				</form>
				<section className={styles.todos}>
					{todos.map((todo) => (
						<div className={styles.todo} key={todo.id}>
							<span className={styles.todoText}>{todo.value}</span>
							<button
								className={styles.todoButton}
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

const root = createRoot(document.querySelector('#root'));
root.render(<TodoApp />);
