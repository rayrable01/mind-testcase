import React from "react";
import { Todo } from "../App";

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
    return (
        <li
            className={`todo-item ${todo.completed ? "completed" : ""}`}
            onClick={() => toggleTodo(todo.id)}
        >
            <span>{todo.text}</span>
        </li>
    );
};

export default TodoItem;
