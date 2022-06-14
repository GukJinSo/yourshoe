import { createRef, useRef, useState } from 'react';
import './App.css';

function App() {
  // useRef (디자인)
  // DOM을 변경할 때 사용
  const myRef = useRef(null);
  const [users, setUsers] = useState([
    { id: 1, name: '길동' },
    { id: 2, name: '동길' },
  ]);

  // 아래는 배열 형태로 users의 length 크기의 useRef를 생성하는 식이다.
  const myRefs = Array.from({ length: users.length }).map(() => createRef());

  return (
    <div>
      <button
        onClick={() => {
          console.log(myRef);
          console.log(myRef.current);
          myRef.current.style.backgroundColor = 'red';
          myRefs[1].current.style.backgroundColor = 'blue';
        }}
      >
        색 변경
      </button>
      <div ref={myRef}>박스</div>
      <div>
        {users.map((n, idx) => (
          <h1 ref={myRefs[idx]}>{n.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
