import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('합계');

  const getAddResult = () => {
    let sum = 0;
    list.forEach((n) => (sum = sum + n));
    console.log('sum', sum);
    return sum;
  };

  // list가 변경될 때만 getAddResult를 실행하겠다
  const addResultMemo = useMemo(() => getAddResult(), [list]);

  return (
    <div>
      <button onClick={() => setStr('바뀜')}>str 바꾸기</button>
      <button onClick={() => setList([...list, 10])}>10 추가하기</button>
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>
      <div>
        {str} : {addResultMemo}
      </div>
    </div>
  );
}

export default App;
