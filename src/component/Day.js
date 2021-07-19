import Word from './Word';
import {useParams} from "react-router-dom";
import useFetch from '../hooks/useFetch';

export default function Day() {
    
    // day check
    // const a = useParams();
    // console.log('useParams : ',a)

    // const day = useParams().day;
    const {day} = useParams();

    const words = useFetch(`http://localhost:3001/words?day=${day}`)
    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}