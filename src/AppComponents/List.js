import React from "react";
import Todo from "./Todo";

const List = ({ list, removeTodoListProp }) => {
    const renderedList = list.map((item) => <Todo removeTodoItemProp={(e) => removeTodoListProp(item.id)} completed={item.completed} title={item.title} key={item.title} />);

    return(
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    );
}

export default List;