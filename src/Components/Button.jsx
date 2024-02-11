export default function Button(props){
    return (<>
        <button value={props.btnvalue} onClick={props.btnclick}>{props.btnvalue}</button>
    </>)
}