import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Todo.css';
import { ToastContainer } from 'react-toastify';

// Componente funcional Todo recebe quatro props: task, toggleComplete, deleteTodo, editTodo
export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='Todo'>
      {/* Parágrafo que exibe o texto da tarefa com a classe 'completed' se a tarefa estiver concluída */}
      <p onClick={() => toggleComplete(task.id)} className={`task-text ${task.completed ? 'completed' : ''}`}>
        {/* Emoji de verificação exibido se a tarefa estiver concluída */}
        {task.completed && <span className="emoji">✅</span>} {task.task}
      </p>
      {/* Div com botões de edição, exclusão e conclusão da tarefa */}
      <div>
        {/* Ícone de edição com a chamada da função editTodo no clique */}
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}></FontAwesomeIcon>
        {/* Ícone de exclusão com a chamada da função deleteTodo no clique */}
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}></FontAwesomeIcon>
        {/* Botão de conclusão com a chamada da função toggleComplete no clique */}
        <button className='concluir' onClick={() => toggleComplete(task.id)}>
          CONCLUIR
        </button>
        {/* Componente ToastContainer para exibir notificações */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
};
