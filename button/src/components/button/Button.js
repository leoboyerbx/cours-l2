import React from "react";
import './Button.scss';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: 'theme',
      toggled: false
    }
  }

  handleClick() {
    this.setState({ toggled: !this.state.toggled })
  }

  switchTheme(theme) {
    this.setState({ theme })
  }

  render() {
    return (
      <button
          className={"btn btn-" + this.state.theme + " " + (this.state.toggled ? "toggled" : "untoggled" ) }
         data-testid="button"
         onClick={ this.handleClick.bind(this) }
      >
      {this.props.children ? this.props.children : "Add text!"}
      </button>);
  }

}


export default Button;
