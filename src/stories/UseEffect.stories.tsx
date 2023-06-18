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

export const SetIntervalExample = () => {
    const [count, setCount] = useState(1);

    console.log('SetIntervalExample');

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick ' + count);
            setCount((state) => state + 1);
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, []);

    return (
        <>
            Count is: {count}
        </>
    );
}

export const ResetEffectExample = () => {
    const [count, setCount] = useState(1);

    console.log('Component rendered with ' + count);

    useEffect(() => {
        console.log('Effect occurred' + ' ' + count)
        return () => {
            console.log('Reset effect with ' + count)
        }
    }, [count])

    const increase = () => setCount(count + 1)

    return (
        <>
            Count is: {count} <button onClick={increase}>+</button>
        </>
    );
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('');

    console.log('Component rendered with ' + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key);
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return (
        <>
            Typed text: {text}
        </>
    );
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('');

    console.log('Component rendered with ' + text);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('Timeout expired')
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <>
            Typed text: {text}
        </>
    );
}