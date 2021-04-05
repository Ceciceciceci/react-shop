
export default function AlertBox(props) {
  return <div className={`alert alert- ${props.variant || 'info'}`}>{props.children}</div>
}