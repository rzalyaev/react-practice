import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

type UsersPropsType = {users: string[]}

const UsersSecret = (props: UsersPropsType) => {
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret);

export const Example1 = () => {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(['Dmitry', 'Igor', 'Viktor'])

    const addUser = () => setUsers([...users, `Katya ${new Date().getTime()}`])

    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessagesCounter count={count}/>
            <Users users={users}/>
        </>
    )
}