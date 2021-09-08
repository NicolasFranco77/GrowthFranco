import React from 'react'
import useStyles from './styles'
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = (props) => {
    const classes = useStyles()
    return (
        <main  className={classes.content}> 
        <div className={classes.toolbar} />
        {props.greeting} 
        <ItemCount stock= {5} initial= {1}/>

        </main>
    )
}

export default ItemListContainer
