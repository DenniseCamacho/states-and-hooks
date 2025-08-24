import React, { useState } from "react";

export default function TodoList() {
    // This holds the full list of todos
    const [todos, setTodos] = useState([]);

    // This holds what the user is typing before adding it to the list
    const [input, setInput] = useState("");

    // Adds the typed text into the todo list
    const addTodo = () => {
        const trimmed = input.trim();
        if (!trimmed) return; // ignore empty input
        setTodos((prev) => [...prev, trimmed]);
        setInput(""); // clear box after adding
    };

    // Deletes one todo item by its number in the list
    const removeTodo = (idx) => {
        setTodos((prev) => prev.filter((_, i) => i !== idx));
    };

    // Lets the user hit Enter key instead of clicking Add
    const handleKey = (e) => {
        if (e.key === "Enter") addTodo();
    };

    return (
        <div>
            {/* Box for typing new todos + Add button */}
            <div style={{ marginBottom: 8 }}>
                <input
                    type="text"
                    placeholder="Add a todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button onClick={addTodo} style={{ marginLeft: 8 }}>Add</button>
            </div>

            {/* Shows the list of todos with delete buttons next to each */}
            <ul style={{ paddingLeft: 16 }}>
                {todos.map((t, i) => (
                    <li key={i} style={{ marginBottom: 6 }}>
                        {t}{" "}
                        <button onClick={() => removeTodo(i)} style={{ marginLeft: 8 }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
