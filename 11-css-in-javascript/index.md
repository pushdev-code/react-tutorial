# CSS In Javascript

There are different ways to style React applications. The most common are:

- Vanilla CSS.
- CSS Modules.
- CSS in JS.
- Utility-First-CSS.

## Vanilla CSS

Import vanilla CSS files in React components.

Create your CSS file as usual.

```css
body {
	font-family: Georgia, 'Times New Roman', Times, serif;
	background-color: blueviolet;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
}

.title {
	text-align: center;
	color: white;
}
```

Import your styles.

```js
// using bundler
import './styles.css';
```

```html
<link rel="stylesheet" href="./styles.css" />
```

Use CSS as usual in your components.

```html
<form className="form">
	<input placeholder="Add TODO" ref="{inputRef}" />
	<button className="form__button form__button--add" onClick="{addTodo}">
		➕
	</button>
</form>
```

It's just Vanilla CSS. Advanced CSS features are missing (Sass).

```scss
.button {
	&:hover {
		background: white;
		color: black;
	}
}
```

```js
// using bundler
import './style.scss';
```

> Please check the example [1-vanilla-css](./1-vanilla-css)

## CSS Modules

CSS Modules generates unique CSS class names.
CSS Modules can be used with Vanilla CSS and Sass.

Import your styles and use them as a styles object.

```js
// using bundler
import styles from './styles.module.css';

console.log(styles);

<h1 className={styles.title}>TODO App</h1>;
<button className={`${styles.formButton} ${styles.formButtonAdd}`}>➕</button>;
```

It is a regular JavaScript object. Al the styles from the CSS file are there.

> Please check the example [2-css-modules](./2-css-modules)

## CSS in JS

CSS-in-JS is a technique for writing and managing CSS styles in JavaScript.

Main benefits over traditional CSS:

- Modular and reusable code.
- It is easier to manage styles for complex and dynamic user interfaces.
- Scoped CSS: encapsulation (Markup, behavior and styles in the same file).
- No inline styles.
- SSR: extracting static .css files for caching. It depends about our needs (For example, if we update styles frequently).

Some libraries are specifically built for React: Styled JSX, styled-components, and Stitches.
Some libraries are framework-agnostic: Emotion, Treat, TypeStyle, Fela, JSS or Goober.

This can make it easier to build and maintain complex and dynamic user interfaces, and can help to improve the overall performance of a web application.

### Styled Components

Styled components are a way to style React components.
Write CSS within your component rather than in an external stylesheet.
Each component has its own styles, rather than having to keep track of which styles apply to which elements in a large stylesheet.

- Output: Most CSS-in-JS libraries inject styles into the DOM at runtime using `<style>` tags, or using the CSSStyleSheet API.
  During SSR, styles are always appended as a `<style>` tag inside the <head> of the rendered HTML page.

```bash
npm install --save styled-components
```

**Tagged Templates syntax**

Basically plain CSS code inside a ES Template Literal.

```js
const Title = styled.h1`
	font-size: 1.5rem;
	text-align: center;
	color: ${props.color};
`;
```

```js
const Title = styled('h1')(['font-size: 1.5rem;' + 'text-align: center;']);
```

Here styled.h1 is just shortcut for styled('h1').
Please check [Tagged Template docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates).

**Object Styles syntax**

```js
const Title = styled.h1({
	fontSize: '1.5rem',
	textAlign: 'center',
	color: 'blueviolet',
});
```

- Syntax highlighting ✅
- Code completion ✅

#### Body styling

```js
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`

// later in your app

<React.Fragment>
  <GlobalStyle whiteColor />
  <Navigation /> {/* example of other top-level stuff */}
</React.Fragment>
```

#### Theming

Let's check the styled component example: https://styled-components.com/docs/advanced#theming.

```js
// Define our button, but with the use of props.theme this time
const Button = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;

	/* Color the border and text with theme.main */
	color: ${(props) => props.theme.main};
	border: 2px solid ${(props) => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
	theme: {
		main: 'palevioletred',
	},
};

// Define what props.theme will look like
const theme = {
	main: 'mediumseagreen',
};

render(
	<div>
		<Button>Normal</Button>

		<ThemeProvider theme={theme}>
			<Button>Themed</Button>
		</ThemeProvider>
	</div>
);
```

> Please check the example [3-css-in-js](./3-css-in-js)

## References

- [How to CSS Style in React by Robin Wieruch](https://www.robinwieruch.de/react-css-styling/)
- [How Styled Components work](https://medium.com/styled-components/how-styled-components-works-618a69970421)
