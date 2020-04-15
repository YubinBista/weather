import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';


const API_KEY ="e5fa98b8dab5f36ef362ff222e1e6933";
class App extends React.Component {
  render() {
  return (
    <div>
      <Title />
      <Form />
      <Weather />
    </div>
  );
}
}

export default App;
