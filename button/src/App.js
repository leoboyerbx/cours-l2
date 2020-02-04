import React from 'react';
import './App.css';
import Button from "./components/button/Button";

class App extends React.Component{
    constructor (props) {
        super (props)
        this.buttonElement = React.createRef()
        this.handleThemeChange = this.handleThemeChange.bind(this)
    }

    handleThemeChange (e) {
        this.buttonElement.current.switchTheme(e.target.value)
    }

    render () {
      return (
        <div className="App">
            <label htmlFor="theme-select">Choose a color:</label>
            <br/>
            <select onChange={this.handleThemeChange} value="theme" name="themes" id="theme-select">
                <option value="theme">Default</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
                <option value="violet">Violet</option>
            </select><br/>
            <br/>
            <Button ref={this.buttonElement}>Slapp like now ! (or I will call the police)</Button>
        </div>
      );
    }
}

export default App;
