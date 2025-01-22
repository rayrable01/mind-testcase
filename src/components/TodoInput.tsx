import React, { useState } from "react";

interface TodoInputProps {
    addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
    const [text, setText] = useState("");

    const handleAddTodo = () => {
        if (text.trim()) {
        addTodo(text);
        setText("");
        }
    };

    return (
        <div className="todo-input">
        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What needs to be done?"
        />
        <button onClick={handleAddTodo}>Add</button>
        </div>
    );
};

export default TodoInput;
