const Loading = ({ show = false, children}) => <>{show ? children : <p>Loading ...</p>}</>
export default Loading
