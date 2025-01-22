import React from "react";

interface TodoFooterProps {
    activeCount: number;
    setFilter: (filter: "all" | "active" | "completed") => void;
    clearCompleted: () => void;
    filter: "all" | "active" | "completed"
}

const TodoFooter: React.FC<TodoFooterProps> = ({
    activeCount,
    setFilter,
    clearCompleted,
    filter,
    }) => {
        
        return (
        <div className="todo-footer">
            <span className="todo-left">{activeCount} items left</span>
            <div className="todo-filter">
                <button className={`${filter === 'all' ? "BTNactive" : ""}`} onClick={() => setFilter("all")}>All</button>
                <button className={`${filter === 'active' ? "BTNactive" : ""}`} onClick={() => setFilter("active")}>Active</button>
                <button className={`${filter === 'completed' ? "BTNactive" : ""}`} onClick={() => setFilter("completed")}>Completed</button>
            </div>
            <button onClick={clearCompleted}>Clear Completed</button>
        </div>
    );
};

export default TodoFooter;
