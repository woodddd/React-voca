import { useState,useEffect } from 'react';

//custom hook
export default function useFetch(url) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => {
            // console.log(res);
            return res.json() //json 포멧의 응답 전문을 자바스크립트 객체로 변환하고, 프로미스 객체를 반환함
        })
        .then(data => {
            // console.log(typeof data);
            // console.log(data);
            setData(data);
        })
    },[url]);//두번쨰 인자인 [] 는 의존성 배열로서 이 값이 비어있을 경우, 값이 변경되어도 새로운 값을 가져올 수 없음
    // day 를 넣어주면 useEffect 안에서 사용한 day 가 최신값이라는 것을 보장받을 수 있음.
    return data
}