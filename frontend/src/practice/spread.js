import logo from './logo.svg';
import './App.css';

function App() {
  const users = [
    { id: 1, name: '구태모', phone: '001' },
    { id: 2, name: '소국진', phone: '666' },
    { id: 3, name: '박승태', phone: '222' },
  ];

  const updateUserDto = {
    id: 2,
    name: '홍길동',
  };

  const newUsers = users.map((user) =>
    user.id === updateUserDto.id ? { ...user, ...updateUserDto } : user,
  );

  console.log(newUsers);

  const sliceTest = [0, 1, 2, 3, 4, 5];
  console.log(sliceTest.slice(4, 5));

  return <div>hi</div>;
}

export default App;
