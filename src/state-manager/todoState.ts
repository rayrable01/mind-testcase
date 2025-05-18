// src/state/todoState.ts
import StateManager from "./state-manager";
import { Todo } from "../App";

export type TodoAppState = {
    todos: Todo[];
    filter: "all" | "active" | "completed";
};

const initialState: TodoAppState = {
    todos: [],
    filter: "all",
};

const todoState = new StateManager<TodoAppState>(initialState);

export default todoState;
