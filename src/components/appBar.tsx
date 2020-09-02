import React from 'react';
import { useRootData } from '../stores/hook';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginLeft: '20px',
    flexGrow: 1,
  },
}));

const ButtonAppBar: React.FC = () => {
  const classes = useStyles();

  const shoppingList = useRootData(store => store.toJS());

  const share = () => {
    if (navigator.share) {
      navigator.share({
        text: shoppingList.toString()
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    }
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shopping list
          </Typography>
          { navigator.share && (
              <IconButton aria-label="share" color="inherit" onClick={share}>
                <ShareIcon />
              </IconButton>
            )
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;
