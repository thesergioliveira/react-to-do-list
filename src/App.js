import React, {useState, Fragment} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import ToDos from "./components/ToDo";

function App() {
  const [list, setList] = useState([]);
  const remove = (itemToRemove) => {
    const newArr = list.filter((item) => item.id !== itemToRemove);
    setList(newArr);
  }
  const check = (itemToCheck) => {
    list.filter((item) => {
      if (item.id == itemToCheck) {
        item.done = !item.done
      }
      return item;
    })
  }

  return (
  <div>
    <Header/>
    <List setList={setList}/>
    <ToDos list ={list} remove={remove} check={check}/>
    <Footer/>
  </div>
  );
}

export default App;
