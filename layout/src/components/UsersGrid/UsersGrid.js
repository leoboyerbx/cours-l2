import React from 'react'
import UserCard from '../UserCard/UserCard';
import Grid from '@material-ui/core/Grid/Grid'


export default function UsersGrid (props) {
    const users = props.users ? props.users : []
    
    return (
        <Grid container justify="center" spacing={2}>
            {users.map((user, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} >
                <UserCard width={1} userData={user} />
            </Grid>
            ))}
        </Grid>
    )
}