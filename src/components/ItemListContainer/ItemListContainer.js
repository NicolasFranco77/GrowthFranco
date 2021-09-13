import React from 'react'
import useStyles from './styles'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = (props) => {
    const classes = useStyles()
    return (
        <main  className={classes.content}> 
         <div className={classes.toolbar} />
       
        {/* {props.greeting}  */}
        <ItemList/>
        <ItemCount stock= {5} initial= {1}/>
        

        </main>
    )
}

export default ItemListContainer
