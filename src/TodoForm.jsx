import React from 'react';

function TodoForm({ handleSubmit, onChange, todoInput }) {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        value={todoInput}
        placeholder="할 일을 입력해 주세요"
        onChange={(e) => onChange(e)}
      />
      <button type="submit">
        추가
      </button>
    </form>
  );
}

export default TodoForm;