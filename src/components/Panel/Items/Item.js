import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));


export default function Item() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
      });
    
    const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    };

    return (
        <List className={classes.root}>
            {ingredients && ingredients.map(ingredient => (
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://drive.google.com/uc?id=1leIJVzRoKtdUX6Hu8xUiB9dTqiHNfFyd" />
                </ListItemAvatar>
                <ListItemText
                    primary="Bacon"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Price
                            </Typography>
                            {" $ 3.00"}
                        </React.Fragment>
                    }
                />
                <Checkbox
                    checked={state.checkedA}
                    onChange={handleChange('checkedA')}
                    value="checkedA"
                    inputProps={{
                    'aria-label': 'primary checkbox',
                    }}
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            ))}
            
        </List>
    );
}
