import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

const generateData = () => {
    console.log("Generate Data");
    return 1;
}

export const UseStateExample1 = () => {
    console.log("Example1");

    // const initValue = useMemo(generateData, []);

    const [count, setCount] = useState<number>(generateData);

    return (
        <>
            <button onClick={() => setCount(state => state + 1)}>+</button>
            {count}
        </>
    );
}