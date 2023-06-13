import "../Assets/assets.css"
function Box(props){
    return (
        <div className="box1"> 
            <h3 >{props.x}</h3>
            <p>{props.y}</p>
            <img className="resize" src={`${props.im}`} alt="" />
        </div>  
    )
}
export default Box;