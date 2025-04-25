import Button from "./Button.tsx";
import * as React from "react";
import {useContext} from "react";
import {ListContext} from "./ListContext.tsx";

interface ListItemProps {
  number: number,
  title: string,
}

const ListItem: React.FC<ListItemProps> = ({number, title}) => {
  const {removeItem} =useContext(ListContext)

  return (
    <li className='listItem'>
      <span className='itemNumber'>#{number}</span>
      <span className='itemTitle'>"{title}"</span>
      <Button title={"Delete"} onClick={() => {removeItem(number)}}/>
    </li>
  )
}

export default ListItem