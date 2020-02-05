import React from 'react';
import Popover from '@material-ui/core/Popover';
import { IconButton } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';


export default function ActionsPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton aria-label="settings" variant="contained" color="primary" aria-describedby={id} variant="contained" color={ props.color ? props.color : "primary" } onClick={handleClick}>
          { props.icon ? props.icon : <MoreVert /> }
        </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={ props.anchorOrigin ? props.anchorOrigin : {
          vertical: 'bottom',
          horizontal:'center',
        }}
        transformOrigin={ props.transformOrigin ? props.transformOrigin : {
          vertical: 'top',
          horizontal: 'right',
        }}
      >
          {props.children}
      </Popover>
    </div>
  );
}