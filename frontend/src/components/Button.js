

export default function Button(props){
  const {btnText, action, link} = props;

  return(
    <button className="btn">{btnText}</button>
  )
}