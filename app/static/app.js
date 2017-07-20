/**
 * Created by wizard on 7/20/17.
 */

var contentNode = document.getElementById('contents');
var component = React.createElement(
  "h1",
  { className: "helloween" },
  "Hello World!"
); // A simple JSX component
ReactDOM.render(component, contentNode); // R  ender the component inside the content Node