import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCalculationExample = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 30000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA *= i;
        }
        return tempResultA;
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }
    
    return (
        <>
            <input value={a} onChange={(e) => {setA(Number(e.currentTarget.value))}}/>
            <input value={b} onChange={(e) => {setB(Number(e.currentTarget.value))}}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}

const UsersSecret = (props: {users: string[]}) => {
    console.log('USERS SECRET');
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret);

export const ReactMemoUsing = () => {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(['Dmitry', 'Igor', 'Viktor', 'Ruslan', 'Valeriy'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().includes('a'));
    }, [users]);

    const addUser = () => setUsers([...users, `Katya ${new Date().getTime()}`])

    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={addUser}>add Katya</button>

            {count}
            <Users users={newArray}/>
        </>
    )
}