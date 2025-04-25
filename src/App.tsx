import List from "./components/List.tsx";
import Button from "./components/Button.tsx";
import './App.css'
import {ListContext, ListProvider} from "./components/ListContext.tsx";
import {useContext} from "react";

function App() {
  const {items, addItem, removeAllItems} = useContext(ListContext);

  return (<>
    <h1 className="headerTitle">List:</h1>
    <div className="btnsSection">
      <Button title={"+ Add New Item".toUpperCase()} onClick={addItem}/>
      <Button title={"Remove All Items".toUpperCase()} onClick={removeAllItems}/>
    </div>

    {items.length > 0
      ? <List/>
      : <div className='headerTitle'>There is nothing here</div>
    }
  </>)
}

const MainApp = () => {
  return (
    <ListProvider>
      <App/>
    </ListProvider>
  );
};

export default MainApp;