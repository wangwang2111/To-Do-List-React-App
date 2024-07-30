import React from "react";
import RemoveButton from "./RemoveButton";

export default function ToDoItem(props) {
    const [isStrikeThrough, setLineThrough] = React.useState(false);
    
    function handleClick() {
        setLineThrough(true);
    }

    return (
        <li style={{textDecoration: isStrikeThrough && "line-through"}} onClick={handleClick} >
        {props.item}
        <RemoveButton onClick={props.removeItem} index={props.id} />
        </li>
    );
}
