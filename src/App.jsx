import React, { useState } from 'react';

function TodoItem({ todo, onDelete, onEdit }) {
  return (
    <div className="flex items-center justify-between mb-2">
      <p className="text-gray-700 underline hover:text-blue-500" onClick={() => onEdit(todo.id)}>
        {todo.text}
      </p>
      <button className="text-red-500 hover:text-red-700" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (!newTodo.trim()) return; // Ignore empty input

    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    setNewTodo('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    // Implement edit functionality (prompt for new text, update todo)
    console.log('Edit todo:', id); // Replace with actual editing logic
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <div className="flex items-center mb-4">
        <input
          className="border rounded-md px-2 py-1 mr-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="bg-blue-500 text-white rounded-md px-4 py-1 hover:bg-blue-700" onClick={addTodo}>
          Add Todo
        </button>
      </div>
      {todos.length === 0 ? (
        <p className="text-gray-500">No todos yet.</p>
      ) : (
        <ul className="list-none ">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
