# React Flow Library Spike

![react-flow-model-builder](https://github.com/igor-franca/react-flow-model-builder/assets/61854510/b1a482e7-21aa-4738-8fb8-b4fbbd0e8b0c)

Welcome to the React Flow Library tutorial! In this tutorial, you will learn how to use the React Flow library to create and manipulate edges and nodes in your React applications. We will be using the `yarn` package manager for this tutorial.

## Prerequisites

Before getting started, make sure you have the following prerequisites installed on your machine:

- Node.js (version 14 or above)
- Yarn

If you don't have these tools installed, please refer to their respective documentation for installation instructions.

## Getting Started

To begin, let's create a new React project and install the necessary dependencies. Open your terminal and follow the steps below:

1. Create a new React project using `create-react-app`:

```bash
npx create-react-app react-flow-tutorial
```

2. Navigate to the project directory:

```bash
cd react-flow-tutorial
```

3. Install the React Flow library:

```bash
yarn add react-flow
```

## Creating a Flow

Now that we have our project set up, let's create a basic flow using React Flow.

1. Open the `src/App.js` file in your preferred code editor.

2. Import the necessary components from the React Flow library:

```jsx
import ReactFlow, { addEdge, removeElements } from 'react-flow-renderer';
```

3. Create a basic functional component called `App`:

```jsx
function App() {
  const [elements, setElements] = useState([]);

  const onElementsRemove = (elementsToRemove) => {
    setElements((prevElements) => removeElements(elementsToRemove, prevElements));
  };

  const onConnect = (params) => {
    setElements((prevElements) => addEdge(params, prevElements));
  };

  return (
    <div style={{ height: '600px' }}>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        nodesDraggable={true}
        nodesConnectable={true}
      />
    </div>
  );
}

export default App;
```

4. Save the file.

## Rendering the Flow

Now that we have our `App` component set up, let's render it in the `src/index.js` file.

1. Open the `src/index.js` file in your code editor.

2. Replace the existing code with the following:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

3. Save the file.

## Testing the Flow

You're now ready to test the flow in your React application!

1. In your terminal, start the development server:

```bash
yarn start
```

2. Open your browser and navigate to `http://localhost:3000`.

3. You should see an empty canvas with the ability to drag and connect nodes.

4. Try dragging nodes from the left sidebar onto the canvas and connecting them by dragging from one node to another.

Congratulations! You have successfully created a basic flow using the React Flow library. Feel free to explore the library's documentation for more advanced features and customization options.

## Conclusion

In this tutorial, you learned how to use the React Flow library to create and manipulate edges and nodes in your React applications. We covered the basic setup, rendering the flow, and testing it in a browser. Now you can apply your newfound knowledge to build more complex flows and interactive user interfaces using React Flow.

Happy coding!
