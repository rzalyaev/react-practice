import React, {useCallback, useMemo, useState} from "react";
import {Select} from "../components/Select/Select";

export default {
    title: 'useMemo demo'
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

export const ImitateUseCallback = () => {
    const [count, setCount] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])


    const memoizedAddBook = useMemo(() => {
        return () => setBooks([...books, `Angular ${Date.now()}`])
    }, [books]);

    const memoizedAddBook2 = useCallback(() => {
        setBooks([...books, `Angular ${Date.now()}`])
    }, [books]);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
            <Books addBook={memoizedAddBook2}/>
        </>
    )
}

type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret');
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>
        </div>
    )
}

const Books = React.memo(BooksSecret);

export const CountrySelect = () => {
    const cities = [
        {countryId: 7, value: '1', title: 'Moscow', population: 11980},
        {countryId: 7, value: '2', title: 'Izhevsk', population: 620},
        {countryId: 7, value: '3', title: 'Chelyabinsk', population: 1182},
        {countryId: 380, value: '4', title: 'Minsk', population: 1975},
        {countryId: 380, value: '5', title: 'Gomel', population: 508},
        {countryId: 380, value: '6', title: 'Vitebsk', population: 362},
        {countryId: 375, value: '7', title: 'Kiev', population: 2884},
        {countryId: 375, value: '8', title: 'Odessa', population: 993},
        {countryId: 375, value: '9', title: 'Dnepr', population: 966},
    ]

    const citiesFromBelarus = useMemo(() => cities.filter(city => city.countryId === 380), []);
    const citiesStartsWithM = useMemo(() => cities.filter(city => city.title.startsWith('M')), []);
    const citiesWithPopulationMoreThan1Mil = useMemo(() => cities.filter(city => city.population > 1000), []);

    const [count, setCount] = useState(0);
    const [value1, setValue1] = useState<string>(citiesFromBelarus[0].value);
    const [value2, setValue2] = useState<string>(citiesStartsWithM[0].value);
    const [value3, setValue3] = useState<string>(citiesWithPopulationMoreThan1Mil[0].value);

    return (
        <div>
            <div>
                Счётчик: {count}
                <button onClick={() => setCount(count + 1)}>+ 1</button>
            </div>
            <div>
                Города из Беларуси:
                <Select value={value1} onChange={setValue1} items={citiesFromBelarus}/>
            </div>
            <div>
                Города на букву М:
                <Select value={value2} onChange={setValue2} items={citiesStartsWithM}/>
            </div>
            <div>
                Города с численностью более 1 миллиона человек:
                <Select value={value3} onChange={setValue3} items={citiesWithPopulationMoreThan1Mil}/>
            </div>
        </div>
    )
}