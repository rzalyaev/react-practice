import React from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";

function App() {
  console.log('App is rendering');
  return (
      <div className="App">
        <OnOff/>
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
