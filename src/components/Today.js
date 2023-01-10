import { useEffect, useState } from 'react';
import 'styles/Today.css';

const Today = () => {
  const [date, setDate] = useState('');
  const [greet, setGreet] = useState('');

  const getDate = () => {
    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const todayDate = new Date();
    const year = todayDate.getFullYear();
    const month = ('0' + (todayDate.getMonth() + 1)).slice(-2);
    const date = ('0' + todayDate.getDate()).slice(-2);
    const day = week[todayDate.getDay()];

    setDate(`${year}년 ${month}월 ${date}일 ${day}`);
  };

  const getWords = () => {
    const greets = [
      '오늘도 멋진 하루 만들기 😎',
      '행복 넘치고 좋은 일만 가득한 하루! 😆',
      '어제보다 더 행복하고 더 좋은 일들이 많은 하루 😊',
      '두 번은 없는 오늘 하루 💪',
      '후회 없이 최선을 다하는 하루!! 👍',
      '가장 소중한 날은 어제도 내일도 아니고 오늘 💖',
      '활기찬 마음으로 시작하는 멋진 하루 😍',
    ];

    let random = Math.floor(Math.random() * (greets.length - 1));

    setGreet(greets[random]);
  };

  useEffect(() => {
    getDate();
    getWords();
  });

  return (
    <div className="today_container">
      <h1>{date}</h1>
      <p>{greet}</p>
    </div>
  );
};

export default Today;
