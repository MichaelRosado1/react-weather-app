import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
});

function WeatherCard() {
    const classes = useStyles();
    return (
        <div>
            <Card variant="outlined" className={classes.root}>
                <CardContent>
                    <Typography variant="h3" component="h2">
                        Temp
                    </Typography>
                    <Typography variant="h5" comoponent="h4">
                        other info
                    </Typography>
                </CardContent>
            </Card>
            
        </div>
    )
}

export default WeatherCard
    
