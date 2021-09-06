import React from 'react'
import useStyles from './styles'


const ItemListContainer = (props) => {
    const classes = useStyles()
    return (
        <main  className={classes.content}> 
        <div className={classes.toolbar} />
        {props.greeting}  
        </main>
    )
}

export default ItemListContainer
