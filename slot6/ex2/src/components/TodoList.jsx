// TodoList.jsx
import { useState } from 'react';
import { ListGroup, Button, InputGroup, FormControl } from 'react-bootstrap';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: input.trim() }]);
    setInput('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTodo();
  };

  return (
    <div className="my-4">
      <h5>Exercise 4 - Todo List</h5>
      <InputGroup className="mb-3">
        <FormControl
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter new task..."
        />
        <Button variant="success" onClick={addTodo}>
          Add
        </Button>
      </InputGroup>

      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item
            key={todo.id}
            className="d-flex justify-content-between align-items-center"
          >
            {todo.text}
            <Button variant="danger" size="sm" onClick={() => deleteTodo(todo.id)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList;