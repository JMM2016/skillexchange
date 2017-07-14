// Include React
var React = require("react");


class Main extends React.Component {
  render () {
    return (
      <div>
        <h1> Hello, world!</h1>
        <p> Is the deprecation warning gone?</p>
      </div>
    );
  }
}

// Export the component back for use in other files
module.exports = Main;
