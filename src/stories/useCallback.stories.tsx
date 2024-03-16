import React, {memo, useCallback, useMemo, useState} from 'react';
import {Meta} from "@storybook/react";
import {EmptyComponent} from "../components/_sample/EmptyComponent";


const meta: Meta<typeof EmptyComponent> = {
  component: EmptyComponent
}
export default meta;

export const LikeUseCallback = () => {
  console.log('LikeUseCallback');

  const [count, setCount] = useState(0);
  const [books, setBooks] = useState(['React', 'JS', 'CSS']);

  const handlePlusOne = () => setCount(prevState => prevState + 1);
  const filteredBooks = useMemo(() => {
    return books.filter(u => u.toLowerCase().includes('a'))
  }, [books]);

  /*const handleAddHTML = useMemo(() => () => setBooks([...books, 'HTML']), [books]);*/
  const handleAddHTML = useCallback(() => setBooks([...books, 'HTML']), [books]);

  return (
      <>
        <button onClick={handlePlusOne}>+</button>
        {count}
        <Books books={filteredBooks} handleAddHTML={handleAddHTML}/>
      </>
  )
}

const Books = memo((props: {books: string[], handleAddHTML: () => void}) => {
  console.log('Books component rendered');
  return (
      <div>
        <button onClick={props.handleAddHTML}>add HTML</button>
        <div>
          {props.books.map((u, i) => <div key={i}>{u}</div>)}
        </div>
      </div>
  )
});