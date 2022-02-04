import React from 'react';
import TodoContainer from "./todo";
import FormContainer from "./form";
import { StoreContainer } from "./store"
import Deneme from './deneme'


function App() {
  return (
    <div className="App">
      <StoreContainer.Provider>
        <FormContainer />
        <TodoContainer />
        
      </StoreContainer.Provider>
    </div>
  );
}

export default App;
