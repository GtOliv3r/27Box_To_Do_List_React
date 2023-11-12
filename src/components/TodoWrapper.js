import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import './TodoWrapper.css';
import { toast } from 'react-toastify';

uuidv4();

// Função de notificação para remoção de tarefa
function notifyRemove() {
  toast.success("🗑️ Remoção Concluída!");
}

// Função de notificação para adição de tarefa
function notifyAdd() {
  toast.success("📆 Ta marcada fiote!");
}

// Função de notificação para conclusão de tarefa
function notifyConclusion() {
  toast.success("🏆 Boassa Champion ");
}

// Componente funcional TodoWrapper
export const TodoWrapper = () => {
  // Estado para armazenar a lista de tarefas
  const [todos, setTodos] = useState([]);

  // Função para salvar os todos no localStorage
  const saveToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // Função para carregar os todos do localStorage ao montar o componente
  const loadFromLocalStorage = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  useEffect(() => {
    // Carrega os todos do localStorage ao montar o componente
    setTodos(loadFromLocalStorage());
  }, []);

  // Função para adicionar uma nova tarefa
  const addTodo = (todo) => {
    if (todo.trim() !== "") {
      // Notifica o usuário sobre a adição bem-sucedida
      notifyAdd();
      // Cria uma nova lista de todos com a nova tarefa
      const newTodos = [...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }];
      // Atualiza o estado e salva no localStorage
      setTodos(newTodos);
      saveToLocalStorage(newTodos);
    } else {
      // Notifica o usuário sobre a necessidade de inserir um texto
      toast.warning("Por favor, insira um texto para adicionar uma tarefa.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    }
  };

  // Função para marcar/desmarcar a conclusão de uma tarefa
  const toggleComplete = (id) => {
    // Notifica o usuário sobre a conclusão bem-sucedida
    notifyConclusion();
    // Atualiza o estado e salva no localStorage
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  // Função para excluir uma tarefa
  const deleteTodo = (id) => {
    // Notifica o usuário sobre a remoção bem-sucedida
    notifyRemove();
    // Atualiza o estado e salva no localStorage
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  // Função para entrar no modo de edição de uma tarefa
  const editTodo = (id) => {
    // Atualiza o estado e salva no localStorage
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, isEditing: !todo.isEditing }
        : todo
    );
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  // Função para editar o texto de uma tarefa
  const editTask = (task, id) => {
    // Atualiza o estado e salva no localStorage
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, task, isEditing: !todo.isEditing }
        : todo
    );
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  // Retorna o JSX do componente TodoWrapper
  return (
    <div className='TodoWrapper'>
      <h1>Gusta's Task ;\ </h1>
      {/* Componente TodoForm para adicionar novas tarefas */}
      <TodoForm addTodo={addTodo}></TodoForm>
      {/* Mapeia e renderiza cada tarefa com base no estado atual */}
      {todos.map((todo, index) => (
        todo.isEditing ? (
          // Componente EditTodoForm para editar tarefas
          <EditTodoForm editTodo={editTask} task={todo} key={todo.id}></EditTodoForm>
        ) : (
          // Componente Todo para exibir tarefas
          <Todo task={todo} key={todo.id}
            toggleComplete={() => toggleComplete(todo.id)} deleteTodo={() => deleteTodo(todo.id)} editTodo={() => editTodo(todo.id)}></Todo>
        )
      ))}
    </div>
  );
};
