// Import's
import { useState } from "react";
import TodoItem from "../TodoItem";

// Asset's
import styles from "./Style.module.css";

const ApplicationUI = () => {
  const [todoName, setTodoName] = useState("");
  const [todo, setTodo] = useState<string[]>([]);

  const handleAddTodo = () => {
    if (todoName) {
      setTodo([...todo, todoName]);
      setTodoName("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.applicationTitle}>To-Do List ✔️</h2>

        <input
          placeholder="Nome da tarefa..."
          type="text"
          className={styles.todoInput}
          value={todoName}
          onChange={(e) => {
            setTodoName(e.target.value);
          }}
        />
        <button
          style={todoName ? { cursor: "pointer" } : { cursor: "not-allowed" }}
          onClick={handleAddTodo}
          className={styles.addTodoButton}
        >
          Adicionar
        </button>

        <div className={styles.todosArea}>
          {todo.map((item, index) => {
            return (
              <TodoItem
                setRemovedTodos={setTodo}
                todos={[...todo]}
                id={index}
                todoName={item}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ApplicationUI;
