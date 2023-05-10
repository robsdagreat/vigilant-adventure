
function Button(props){
   const buttonStyle={
    background: props.backgroundColor,
    color: "#fff",
    cursor: "pointer",
    border: "none",
    padding: "10px"
   }

    return(
        <>
        <div>
            <button onClick={props.submit} style={buttonStyle}>{props.text}</button>
        </div>
        </>
    )
}

export default Button;