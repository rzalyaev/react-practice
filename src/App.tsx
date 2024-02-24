import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  console.log('App is rendering');
  return (
      <div className="App">
        <PageTitle title={'This is APP title!'}/>
        <PageTitle title={'Random title!'}/>
        <Accordion titleValue={'Menu'} collapsed={false}/>
        <Accordion titleValue={'Users'} collapsed={true}/>
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
      </div>
  );
}

type PageTitlePropsType = {
  title: string
}

const PageTitle = (props: PageTitlePropsType) => {
  console.log('AppTitle is rendering');
  return (
      <h1>{props.title}</h1>
  )
}

export default App;
