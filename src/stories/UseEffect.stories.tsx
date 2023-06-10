import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const UseEffectExample = () => {
    const [fake, setFake] = useState(1);
    const [count, setCount] = useState(1);

    console.log('Example');

    useEffect(() => {
        console.log('useEffect every render');
        document.title = count.toString();
    });

    useEffect(() => {
        console.log('useEffect only for the first render (componentDidMount analog)');
        document.title = count.toString();
    }, []);

    useEffect(() => {
        console.log('useEffect for the first render and every render when count changed');
        document.title = count.toString();
    }, [count]);

    return (
        <>
            Hello, {count}
            <button onClick={() => setCount(count + 1)}>count+</button>
            <button onClick={() => setFake(fake + 1)}>fake+</button>
        </>
    );
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1);
    const [count, setCount] = useState(1);

    console.log('SetTimeoutExample');

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('setTimeout');
    //         document.title = count.toString();
    //     }, 1000);
    // }, []);

    // useEffect(() => {
    //     setInterval(() => {
    //         console.log('tick ' + count);
    //         setCount((state) => state + 1);
    //     }, 1000);
    // }, []);

    return (
        <>
            Count - {count}. Fake - {fake}.
            {/*<button onClick={() => setCount(count + 1)}>count+</button>*/}
            {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        </>
    );
}