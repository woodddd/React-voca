import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import useFetch from '../hooks/useFetch';

export default function DayList() {

    const days = useFetch('http://localhost:3001/days');

    if(days.length === 0) {
        return <span>Loading...</span>
    }

    // const [days, setDays] = useState([]);
    // const [count, setCount] = useState(0);

    // function onClick() {
    //     setCount(count + 1);
    // }

    // function onClick2() {
    //     setDays([
    //         ...days,
    //         {
    //             id : Math.random(),
    //             day : 1,
    //         }
    //     ])
    // }

    // useEffect(() => {
    //     console.log('Count change');
    // },[]);//2번째 인자, 의존성 배열 (count의 값이 바뀔 떄에만 실행됨.)
    // 만약 최초에 1번만 실행하고 싶다면, [] 빈배열을 넘겨주면 된다.

    // useEffect(() => {
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         return res.json() //json으로 변환되고 프로미스 반환
    //     })
    //     .then(data => {
    //         setDays(data);
    //     })
    // },[]);

    return  (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    Day {day.day}
                </li>
            ))}
        </ul>
    );
}