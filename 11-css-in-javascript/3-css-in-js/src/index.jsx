import React from 'react';
import { createRoot } from 'react-dom/client';
import styled, { css, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    	font-family: Georgia, 'Times New Roman', Times, serif;
			background-color: blueviolet;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100vh;
  }`;

/**
 * kebab-case.
 * JavaScript values can be interpolated.
 * Easy to migrate CSS.
 * Code need to be parsed and converted to JavaScript code.
 */

// const Title = styled.h1`
// 	font-size: 1.5rem;
// 	text-align: center;
// 	color: blueviolet;
// `;

/**
 * CamelCase and using strings.
 * JavaScript values can be referenced as expected;
 * Migrating CSS will have an extra effort.
 */
const Title = styled.h1({
	fontSize: '1.5rem',
	textAlign: 'center',
	color: 'blueviolet',
});

const Wrapper = styled.section`
	border-radius: 0.4rem;
	padding: 2rem;
	background: papayawhip;
`;

const Form = styled.form`
	display: flex;
`;

const SIZES = {
	small: css`
		font-size: 13px;
	`,
	medium: css`
		font-size: 15px;
	`,
	large: css`
		font-size: 17px;
	`,
};

const Button = styled.button`
	/* Adapt the colors based on primary prop */
	background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
	color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

	cursor: pointer;
	${(props) => props.size && SIZES[props.size]}
	margin-left: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;

	&:hover {
		background: ${(props) => (props.primary ? 'white' : 'palevioletred')};
		color: ${(props) => (props.primary ? 'palevioletred' : 'white')};
	}
`;

const Todo = styled.article`
	border: 1px solid black;
	border-radius: 0.2rem;
	margin-top: 1rem;
	padding: 0.4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

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
		<Wrapper>
			<Title>TODO App</Title>
			<Form>
				<input placeholder='Add TODO' ref={inputRef} />
				<Button primary onClick={addTodo} size='large'>
					➕
				</Button>
			</Form>
			<section>
				{todos.map((todo) => (
					<Todo key={todo.id}>
						<span css={{ color: 'purple' }}>{todo.value}</span>
						<Button onClick={() => removeTodo(todo.id)} size='small'>
							🗑
						</Button>
					</Todo>
				))}
			</section>
		</Wrapper>
	);
}

const root = createRoot(document.querySelector('#root'));
root.render(
	<>
		<GlobalStyle />
		<TodoApp />
	</>
);
