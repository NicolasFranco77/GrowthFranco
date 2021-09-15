import React from 'react'
import useStyles from './styles'

import ItemList from '../ItemList/ItemList'


const ItemListContainer = (props) => {
    const classes = useStyles()
    return (
        <main  className={classes.content}> 
         <div className={classes.toolbar} />
       
      
        <ItemList/>
       
        

        </main>
    )
}

export default ItemListContainer
