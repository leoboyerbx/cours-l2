
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List'
import { red } from '@material-ui/core/colors';
import { Favorite, Share, ExpandMore, Chat, Call, Facebook, Twitter, WhatsApp } from '@material-ui/icons'
import ActionsPopover from '../ActionsPopover/ActionsPopover'
import { ListItemText, ListItemIcon, ListItem } from '@material-ui/core';

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  popoverContent: {
    padding: theme.spacing(2),
  },
  transition: {
    transition: theme.transitions.create('color', {
      duration: theme.transitions.duration.shortest,
    }),
  }
}));

export default function UserCard (props) {
  const user = props.userData ? props.userData : null
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false)
  const [loved, setLoved] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLike = () => {
    setLoved(!loved)
  }

  return props.userData ? (
    <Card className={classes.root} data-testclass="userCard">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {user.name.first.slice(0, 1) + user.name.last.slice(0, 1)}
          </Avatar>
        }
        action={
          <ActionsPopover>
            <List component="nav" aria-label="user actions menu">
              <ListItem button>
                <ListItemIcon>
                  <Chat></Chat>
                </ListItemIcon>
                <ListItemText primary="Send a message" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Call />
                </ListItemIcon>
                <ListItemText primary="Call" />
              </ListItem>
            </List>
          </ActionsPopover>
        }
        title={ `${user.name.title} ${user.name.first} ${user.name.last}` }
        subheader={user.country}
      >
      </CardHeader>
      <CardMedia
        className={classes.media}
        image={user.picture.large}
        title="Profile picture"
      />
      <CardContent>
        <Typography variant="body2" component="p">
          <b>Age: </b> {user.dob.age}<br />
          <b>Gender: </b> {capitalize(user.gender)}<br />
          <b>Email: </b> {user.email}<br />
          Created their account {user.registered.age} years ago<br />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLike}>
          <Favorite color={loved ? 'secondary' : 'action'} className={ classes.transition } />
        </IconButton>
        <ActionsPopover icon={
          <Share></Share>
        }
        transformOrigin={{
            horizontal: 'left',
            vertical: 'top'
          }
        }>
        <List component="nav" aria-label="user share menu">
          <ListItem button>
            <ListItemIcon>
              <Facebook></Facebook>
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Twitter></Twitter>
            </ListItemIcon>
            <ListItemText primary="Twitter" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <WhatsApp></WhatsApp>
            </ListItemIcon>
            <ListItemText primary="Whatsapp" />
          </ListItem>
        </List>
        </ActionsPopover>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
            <ExpandMore></ExpandMore>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <b>Phone: </b> {user.phone}<br />
            <b>Country: </b> {user.location.country}<br />
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  ) : (
    <Card className={classes.root} data-testclass="userCard">
        UserData not specified
    </Card>
  )
}
