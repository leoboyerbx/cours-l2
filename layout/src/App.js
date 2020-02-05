import React from 'react';
import './App.scss';
import { makeStyles } from '@material-ui/core/styles'
import UserCard from './components/UserCard/UserCard';
import Grid from '@material-ui/core/Grid/Grid'
import data from './data/user';

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div style={{ padding: 20 }}>
          <Grid container justify="center" spacing={2}>
            {data.results.map((user, index) => (
              <Grid key={index} item>
                <UserCard userData={user} />
            </Grid>
            ))}
        </Grid>
      </div>
    );
  }
  
}

export default App;
