import RemoveTaskButton from './RemoveTaskButton';

export const ListItem = ({content, onClick}) => <>
  <span>{content}</span><RemoveTaskButton id={content} onClick={onClick}/>
  <br />
</>

export default ListItem
