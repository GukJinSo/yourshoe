import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: '상진' },
    { id: 2, name: '길동' },
    { id: 3, name: '국진' },
    { id: 4, name: '단미' },
  ]);

  // 다음 인덱스를 구하는 부분
  const numArr = [];
  users.forEach((n) => {
    numArr.push(n.id);
  });
  let maxNum = Math.max.apply(null, numArr) + 1;

  // 레퍼런스가 변경되어야만 리렌더링한다. 객체의 값이 바뀌는 것만으로는 동작하지 않음.
  // 따라서 깊은 복사를 위해 스프레드 연산자 사용이 필요
  const download = () => {
    setUsers([...users, { id: maxNum, name: '성진' }]);
  };

  console.log(users);
  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((n) => (
        <h1>
          {n.id}, {n.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
