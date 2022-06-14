import React, { useEffect, useState } from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Home from '../components/bodies/Home';

const HomePage = () => {
  const [board, setBoard] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = [
      { id: 1, name: '국진' },
      { id: 2, name: '단미' },
      { id: 3, name: '원진' },
    ];
    setBoard([...data]);
    setUser({ id: 1, username: 'gk' });
  }, []);

  return <Home board={board} setBoard={setBoard} user={user} />;
};

export default HomePage;
