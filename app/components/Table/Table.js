import React from 'react';
import Row from './Row';
import style from "./table.scss";
const table = props => {
    const list = props.searchers.list_to_display.map((item, index) =>{
        return (
            <Row 
                key= {index}
                id= {index}
                name= { item.name }
                artist= { item.artist }
                dateAdded= { item.dateAdded }
                album = { item.album }
                link= { item.link }
                handleDelete= { props.handleDelete }
            />
        )
    });

    // list.unshift(
    //     <Row 
    //             key= {-1}
    //             name= "Nome"
    //             artist= "Artista"
    //             dateAdded= "Adicionado em"
    //             album = "Album"
    //         />
    // );

return list;

}

export default table;