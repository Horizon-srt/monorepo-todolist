import React from 'react';

function Header() {
  const handleNewTodoKeyDown = () => {};
  const handleNewTodoChange = () => {};

  return (
    <header className="header">
      <h1>todos</h1>
      <input 
        className="new-todo" 
        placeholder="What needs to be done?" 
        autoFocus={true}
        onKeyDown={handleNewTodoKeyDown}
        onChange={handleNewTodoChange}
      />
    </header>
  );
}

export default Header;