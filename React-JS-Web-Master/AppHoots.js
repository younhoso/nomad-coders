import React,{useState} from 'react';
import Header from './src/components/Header/index';

const AppHoots = () => {
   const [count, setCount] = useState(0);

   const add = (e) => {
    e.preventDefault();
    setCount(count + 1);
   };

   const minus = (e) => {
    e.preventDefault();
    setCount(count - 1);
   };

    return(
        <div>
            <Header />
            <h1>The number is: {count}</h1>
            <button onClick={add}>add</button>
            <button onClick={minus}>minus</button>
        </div>
    )
};

export default AppHoots;