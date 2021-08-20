import React from 'react';

const DisplayTodo = (props) => {

    const { todos, setTodos }  = props;

    const handleTodoDelete = (deleteIndex) => {
        const filteredTodos = todos.filter((todo, index)=> todo.complete === false);
    
        setTodos(filteredTodos);
    };
    
    const handleToggleComplete = (todo) => {
            todo.complete = !todo.complete;
        
        setTodos([...todos]);
    }

    return (
        <div>
        {
            todos.map((todo, index) => {
            let todoClasses ="notCompleted";
            if (todo.complete) {
                todoClasses = "completed";
            }
            return ( <div key={index}>
                <input onChange={(e) => handleToggleComplete(todo)}
                checked={todo.complete} type="checkbox" />
                <span className={todoClasses}>{todo.text}</span>
                <button onClick={(e) => {
                handleTodoDelete(index);
                }}
                style={{ marginLeft: "10px" }}
                >Delete</button>
                </div>
            );
            })}
        </div>
    );

}
export default DisplayTodo;