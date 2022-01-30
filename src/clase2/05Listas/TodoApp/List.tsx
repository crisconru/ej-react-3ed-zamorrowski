import ListItem from "./ListItem"

const List = ({items, onClick}) => {
  return <>
    { items.map(item => <ListItem key={item} content={item} onClick={onClick}/>) }
  </>
}

export default List