import React from 'react';
import './App.scss';
import UsersGrid from './components/UsersGrid/UsersGrid'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.apiUrl = 'https://randomuser.me/api/?results=50'
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch(this.apiUrl).then(res => res.json()).then(data => {
      this.setState({ users: data.results })
    })
  }

  render () {
    return (
      <div style={{ padding: 20 }}>
          <UsersGrid users={this.state.users} />
      </div>
    );
  }
  
}

export default App;
