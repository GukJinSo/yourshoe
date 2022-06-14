import { useEffect, useState } from 'react';
// import에 중괄호가 있는데, 해당 파일에서 default export가 아닌 경우에 import 시에 붙여주었다.

import './App.css';

function App() {
  const [data, setData] = useState();
  const [search, setSearch] = useState(0);

  const download = () => {
    const downloadData = [
      { id: 1, text: '최근 ~~~ 행보가 ~~~' },
      { id: 2, text: '5년 사이 가수 k 씨의 ~~~' },
      { id: 3, text: '대외무역적자, 10년 만에 ~~~' },
    ];
    setData(downloadData);
  };

  const idChecked = (e) => {
    const inputNum = e.target.value * 1;
    setSearch(inputNum);
    const chosen = [];
    data.filter((n) => {
      if (n.id === inputNum) {
        chosen.push(n);
      }
    });

    // 화면에 표시할 자료가 없거나 사용자가 입력한 값이 범위를 벗어날 경우 download();
    if (chosen.length === 0 || data.length === 0) {
      download();
    } else {
      setData(chosen);
    }
  };
  // useEffect() : 첫 인자로 callback func, 두번째로는 dependancies가 온다
  // useEffect()의 실행 시점:
  // 1. App()함수가 최초 실행될 때(마운트될 때) 동작
  // 2. 상태 변수가 변경될 때 (해당 상태 변수가 dependancies list에 등록되어 있거나, list가 없는 경우에만 동작)
  useEffect(() => {
    console.log('useEffect run');
    download();
  }, []);

  return (
    <div>
      <input onChange={idChecked}></input> search:{search}
      <div>
        {data &&
          data.map((n) => (
            <h1>
              {n.id}, {n.text}
            </h1>
          ))}
      </div>
    </div>
  );
}

export default App;
