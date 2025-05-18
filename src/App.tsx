import './App.css';
import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import todoState, { TodoAppState } from "./state-manager/todoState";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const App: React.FC = () => {
  const [state, setState] = useState<TodoAppState>(todoState.getState());

  useEffect(() => {
    const unsubscribe = todoState.subscribe(setState);
    return () => unsubscribe();
  }, []);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    todoState.setState((prev) => ({
      todos: [...prev.todos, newTodo],
    }));
  };

  const toggleTodo = (id: number) => {
    todoState.setState((prev) => ({
      todos: prev.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  const clearCompleted = () => {
    todoState.setState((prev) => ({
      todos: prev.todos.filter((todo) => !todo.completed),
    }));
  };

  const setFilter = (filter: "all" | "active" | "completed") => {
    todoState.setState({ filter });
  };

  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === "active") return !todo.completed;
    if (state.filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Todo App for Аналит.Прогр.Решения</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
      <TodoFooter
        activeCount={state.todos.filter((todo) => !todo.completed).length}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
        filter={state.filter}
      />
    </div>
  );
};

export default App;
