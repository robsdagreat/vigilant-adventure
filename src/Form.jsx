
function Form(props){



    return(
   
   <>
   <div>

    <label > {props.label} </label>
    <input onChange={props.handleChange} type={props.type}   name={props.content} />

   </div>
   
   
   </>  




    )
}

export default Form;