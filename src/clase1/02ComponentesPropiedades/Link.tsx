const Link = ({to, openInNewTab = false, text}) => <a href={to} target={openInNewTab ? '_blank' : '_self'}>{text}</a>
export default Link