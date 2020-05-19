import React, { useState } from 'react'; 

import {
    Card, 
    CardContent, 
    CardMedia, 
    Typography,
} from '@material-ui/core';  

import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';

const MAX_LENGTH = 300; 

export default function Book({ book }) { 
    const {title, author, image } = book; 

    return (
        <Card style={{ display: 'flex', margin: '2em 0', width: '100%'}}>
            <CardMedia style={{ marginBottom: 'auto'}}>
                <img src={image} alt={'${title}'} />
            </CardMedia> 
            <div> 
                <CardContent>
                    <div style={{display:'flex', alignItems:'center', justifyContent: 'space-between' }} > 
                        <Typography component='h2' variant='h2'>
                            {title}
                        </Typography>
                    </div>
                    <div>
                        <Typography component='h5' variant='h5'>
                            {author}
                        </Typography>
                    </div>
                    <div> 
                    <Tooltip title="Add" aria-label="add">
                        <Fab color="primary">
                        <AddIcon />
                        </Fab>
                    </Tooltip>
                    </div>
                </CardContent>
            </div>
        </Card>

    )
}
