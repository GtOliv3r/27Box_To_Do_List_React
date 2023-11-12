import React, { useState } from 'react';
import './EditTodoForm.css';
import { ToastContainer, toast } from 'react-toastify';

// Componente funcional EditTodoForm recebe duas props: editTodo e task
export const EditTodoForm = ({ editTodo, task }) => {
  // Utiliza o estado para controlar o valor do input
  const [value, setValue] = useState(task.task);

  // Função chamada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Chama a função editTodo passando o novo valor e o id da tarefa
    editTodo(value, task.id);

    // Limpa o valor do input após a submissão
    setValue('');
  };

  // Função para exibir uma notificação de edição bem-sucedida
  function notifyEdit() {
    toast.success('✏️ Edição Concluída!');
  }

  // Retorna o JSX com o formulário de edição
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      {/* Input controlado pelo estado com valor inicial da tarefa */}
      <input
        type='text'
        className='todo-input'
        value={value}
        placeholder='Update Task'
        onChange={(e) => setValue(e.target.value)}
      ></input>
      {/* Botão de atualização com a chamada da função notifyEdit no clique */}
      <button onClick={notifyEdit} type='submit' className='todo-btn'>
        ATUALIZAR
      </button>
      {/* Componente ToastContainer para exibir notificações */}
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </form>
  );
};
