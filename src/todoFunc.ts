import { useState } from "react";

export type TodoType = {
    title: string;
    id: number;
    completed: boolean;
};

export const useTodo = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [activeTodos, setActiveTodos] = useState<TodoType[]>([]);

    // Функция добавления новой задачи
    const addTodo = (title: string) => {
        const newTodo: TodoType = {
            id: Date.now(),  // Уникальный ID на основе текущего времени
            title: title,
            completed: false,
        };
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
    };

    // Функция для переключения статуса completed задачи
    const toggleComplete = (id: number) => {
        const newTodos = todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
        setActiveTodos(newTodos);
    };

    // Функция для удаления задачи
    const deleteTodos = () => {
        const newTodos = todos.filter(todo => !activeTodos.some(activeTodo => activeTodo.id === todo.id));
        setTodos(newTodos);
        setActiveTodos([]);
    };

    return {
        todos,
        addTodo,
        toggleComplete,
        deleteTodos,
    };
};
