import{useState} from 'react';
export function Counter (props) {
    let [count, setCount] = useState(0);
    let increment = () => {
        setCount(count + 1);      
    };
    let [count5, setCount5] = useState(0);
    let increment5 = () => {
        setCount5(count5 + 5);
    };
    return (
        <div>
        <div>
            <span>Number of times {count} clicked</span>
            <button onClick={increment}>increment</button> 
            
        </div>
        <div>
            <div>Number of times {count5} clicked</div>
            <button onClick={increment5}>increment5</button>
        </div>
        </div>
    );
}