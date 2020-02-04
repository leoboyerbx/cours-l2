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


  switchTheme(theme) {
    this.setState({ theme })
  }

  render() {
    return (
      <a
          className={"btn btn-" + this.state.theme}
         data-testid="button"
      >
      {this.props.children ? this.props.children : "Add text!"}
      </a>);
  }

}


export default Button;
