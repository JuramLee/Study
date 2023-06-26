import React, { useState } from 'react';

const GoodChild = ({ name }) => {
  const [show, setShow] = useState(false);

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

export default GoodChild;
