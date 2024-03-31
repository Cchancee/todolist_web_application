import { useState } from "react";

const AddTodo = ({ todos, Setodos }) => {
    const [todo, setTodo] = useState("");

    const addTodoTodoList = () => {
        if (todo.trim() !== "") {
            Setodos([...todos, { id: todos.length + 1, todoName: todo, todoStatus: false }]);
            setTodo("");
        } else {
            alert("Can't save empty todos!");
        }
    };

    return (
        <div className="m-auto rounded-md h-80 bg-orange-800 p-4 w-fu-4/6">
            <h2 className="p-4 pl-0 text-white text-2xl font-medium m-auto mb-2">TodoList App</h2>
            <label className="text-white mb-2 block">Task Name</label>
            <input
                value={todo}
                name="todo"
                onChange={(e) => setTodo(e.target.value)}
                type="text"
                className="p-3 font-normal bg-slate-200 w-full outline-none rounded-sm mb-3"
                placeholder="Enter Task Name"
            />
            <button
                onClick={addTodoTodoList}
                className="p-2 w-full m-auto block bg-orange-500 text-white font-normal mt-4 hover:bg-orange-600 rounded-sm"
            >
                Add Todo
            </button>
        </div>
    );
};

export default AddTodo; 