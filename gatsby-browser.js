import ReactDOM from 'react-dom';

// work-around for page re-render
export function replaceHydrateFunction() {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback);
  };
}