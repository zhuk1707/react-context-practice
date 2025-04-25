import {useContext} from "react";
import {ListContext} from "./ListContext";
import ListItem from "./ListItem";

const List = () => {
  const {items} = useContext(ListContext);

  return (
    <ul className="list">
      {items.map((item) => (
        <ListItem key={item.number} number={item.number} title={item.title}/>))
      }
    </ul>
  );
};

export default List;
