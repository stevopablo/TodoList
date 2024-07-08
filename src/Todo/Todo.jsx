import React, { useState } from 'react';
import './todo.css'
function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(''); 
  const AddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };
// att  Atualizar Todo
  const DeleteTodo = (index) => {
    const attTodos = todos.filter((_, i) => i !== index);
    setTodos(attTodos);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={AddTodo}>Adicionar Tarefa</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => DeleteTodo(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
