# Using JSX

## JSX = JavaScript XML.

JSX allows us to write HTML in React, making it easier to understand what's happening with the components, just by looking at the JSX part of the component. JSX produces React “elements” and we will render them to the DOM.

```js
const message = 'PushDev';
const element = <h1 className='greeting'>Hello, {message}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Under the hood it is using `React.createElement()`

```js
const message = 'PushDev';
const element = React.createElement('h1', {className: 'greeting'}, `Hello, ${message}`);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Because JSX is not JavaScript we will convert it using [Babel](https://babeljs.io/) code compiler. You can get it through the [CDN](https://babeljs.io/docs/en/babel-standalone#script-tags) or using [npm](https://babeljs.io/docs/en/).

## Expressions in JSX

With JSX you can write expressions using curly braces `{ }`. Everything contained inside the curly braces will be evaluated as Javascript code.

```js
const myElement = <h1>I'm { 20 + 1 } years old</h1>;
```

## Reserved words

You must use `className` instead of `class`.  These reserved words are mandatory to avoid clashing with the ones used in HTML.

```js
const myElement = <h1 className='Title'>Hello Push!</h1>;
```

## Properties and methods in JSX are camelCase

```js
const greeting = () => console.log('Hello Push!');
const myElement = <button onClick={greeting}>Click me!</button>;
```

## Self-closing tags must end in a slash

```js
const src = '../mypath';
const myImage = <img src={src} alt='my image' />;
```

## Large HTML blocks

Put the HTML inside **parentheses** when working with multiple lines.

```js
const myElement = (
  <div>
    <p>Hello</p>
    <p>Push!</p>
  </div>
);
```

## One Top-Level Element

The HTML code must be wrapped only in ONE top-level element.

```js
const myList = (
  <ul className='mylist'>
    <li className='mylist__item'>
      <p>JavaScript</p>
    </li>
    <li className='mylist__item'>
      <p>Python</p>
    </li>
    <li className='mylist__item'>
      <p>Java</p>
    </li>
  </ul>
);
```

Note: You can use `<></>` to wrap elements, it is known as [Fragment](https://reactjs.org/docs/fragments.html#short-syntax).

```js
render() {
  return (
     <>
       <Header />
       <Navigation />
       <Main />
       <Footer />
     </>
  );
}
```

## Ternary operator

```js
const age = 19;
const myElement = <p>{age < 18 ? "Sorry, you can't enter the bar" : 'Welcome! 🍺'}</p>;
```

## Exercise
1. Let's create a BMI (Body Mass Index) calculator.
2. In your forked `react-tutorial` repo, create a new branch named `feature/2-using-jsx`
3. Create a `index.html` file within the `2-using-jsx` folder.
4. You will have 2 variables:  Height (Meters) and weight (KG). The equation to calculate the BMI is:
   * BMI = WEIGHT / HEIGHT <sup>2</sup>
5. Based on the following table you will get the BMI information.

| BMI         | Condition                 | Description                                                                            |
| ----------- | --------------------------|----------------------------------------------------------------------------------------|
| underweight | BMI < 18.5                | You should see your doctor for advice on gaining weight in a healthy way.              |
| normal      | BMI >= 18.5 && BMI < 24.9 | You acquire healthy habits such as balanced eating and physical activity.              |
| overweight  | BMI >= 24.9               | You should therefore consult your doctor for options for reducing weight and body fat. |

6. Based on the BMI you will need to render: 

* Title: Element with the title of the app (e.g BMI Calculator).
* Image: Look up into the `assets` folder, you will need to render the image based on the BMI result.
* Description: Look up the table above.

> Use the different JSX concepts described in this section.

**Bonus**
* Use a FORM element to get the weight and height. You can create a button to calculate the BMI.

7. Use classes to identify the BMI and add styles for each classification.
8. Push your changes and create the Pull request.

## Sources

- [React Tutorial: An Overview and Walkthrough](https://www.taniarascia.com/getting-started-with-react/)
- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
