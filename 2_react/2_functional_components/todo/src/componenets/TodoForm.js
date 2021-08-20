import React, {useState} from 'react';

const TodoForm=(props) => {
    const [newTodo, setNewTodo] = useState("");
    const {todos, setTodos} = props;

    const handleNewTodoSubmit = (e) =>{
        e.preventDefault();
    
        // if (newTodo.length === 0) {
        // return;
    
        // }
    

        setTodos([...todos, {
            text: newTodo,
            complete: false
            }]);
        setNewTodo("");
    };

    return (
        <form onSubmit= {handleNewTodoSubmit}>
        
            <input onChange={(e) => {
            setNewTodo(e.target.value);
            }}  type="text" value={ newTodo }/>
            <div>
            <button>Add</button>
            </div>
            <hr />
        </form>
        
    )
}

export default TodoForm;