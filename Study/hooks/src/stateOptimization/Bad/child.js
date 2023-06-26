import React from 'react';

const BadChild = ({ name, show, setShow }) => {
  const clickBtn = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={clickBtn}>내 이름은!</button>
      {show && <div>{name}</div>}
    </div>
  );
};

export default BadChild;
