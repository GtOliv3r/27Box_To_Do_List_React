import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import './TodoForm.css';

// Componente funcional TodoForm recebe uma prop: addTodo
export const TodoForm = ({ addTodo }) => {
  // Utiliza o estado para controlar o valor do input
  const [value, setValue] = useState('');

  // Função chamada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Chama a função addTodo passando o valor do input
    addTodo(value);

    // Limpa o valor do input após a submissão
    setValue('');
  };

  // Retorna o JSX com o formulário de adição de tarefa
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      {/* Input controlado pelo estado com um placeholder */}
      <input
        type='text'
        className='todo-input'
        value={value}
        placeholder='O que temos pra hoje?'
        onChange={(e) => setValue(e.target.value)}
      ></input>
      {/* Botão de submissão do formulário */}
      <button type='submit' className='todo-btn'>
        <span>ADD TAREFA</span>
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
