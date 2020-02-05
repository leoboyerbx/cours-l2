
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
import { red } from '@material-ui/core/colors';
import { Favorite, Share, ExpandMore } from '@material-ui/icons'
import ActionsPopover from '../ActionsPopover/ActionsPopover'

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
  const user = props.userData
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false)
  const [loved, setLoved] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLike = () => {
    setLoved(!loved)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {user.name.first.slice(0, 1) + user.name.last.slice(0, 1)}
          </Avatar>
        }
        action={
          <ActionsPopover>
            <Typography className={ classes.popoverContent }>Content of the Popover</Typography>
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
          Réseaux
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
