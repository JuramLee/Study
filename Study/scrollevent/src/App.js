import { useState } from 'react';

function App() {
  // 최적화 적용X
  const [num, setNum] = useState(0);
  // Debounce
  const [debNum, setDebNum] = useState(0);
  // Throttle
  const [throtNum, setThrotNum] = useState(0);

  function debounce() {
    let timer;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setDebNum(debNum + 1);
    }, 300);
  }

  function throttle() {
    let timer;
    if (!timer) {
      timer = setTimeout(() => {
        setThrotNum(throtNum + 1);
      }, 100);
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          width: '150px',
          height: '100px',
          border: '1px solid red',
          overflow: 'scroll',
          marginRight: '10px',
        }}
        onScroll={() => setNum((prev) => prev + 1)}>
        <div style={{ width: '130px', height: '10000px' }}>
          <div style={{ position: 'fixed', textAlign: 'center' }}>
            Nothing : {num}
          </div>
        </div>
      </div>
      <div
        style={{
          width: '150px',
          height: '100px',
          border: '1px solid red',
          overflow: 'scroll',
          marginRight: '10px',
        }}
        onScroll={debounce}>
        <div style={{ width: '130px', height: '10000px' }}>
          <div style={{ position: 'fixed', textAlign: 'center' }}>
            Debounce : {debNum}
          </div>
        </div>
      </div>
      <div
        style={{
          width: '150px',
          height: '100px',
          border: '1px solid red',
          overflow: 'scroll',
        }}
        onScroll={throttle}>
        <div style={{ width: '130px', height: '10000px' }}>
          <div style={{ position: 'fixed', textAlign: 'center' }}>
            Throttle : {throtNum}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
