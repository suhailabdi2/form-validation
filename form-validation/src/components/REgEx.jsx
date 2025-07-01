import React,{useState} from "react";

function RegEx(){
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [errors,setErrors]= useState({});
    const emailPattern =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-za-z\d]{6,}$/
    const validate=()=>{
        let validateErrors={};
        if(!emailPattern.test(email)){
            validateErrors.email="Invalid email format!";
        }
        if(!passwordPattern.test(password)){
            validateErrors.password ="Invalid password format";
        }
        return validateErrors;
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        const errors = validate();
        if(Object.keys(errors).length > 0){
            setErrors(errors);
        }else{
            alert("Form Submitted successfully");
        }
        console.log(errors)
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>REgEx Validation</h1>
            <div>
                <label>Email:</label>
                <input type="text"
                value={email} 
                onChange={(e)=>
                    setEmail(e.target.value)}
                 />
                {errors.email && <span style={{color:"red"}}Email not right></span>}
                <br/>
                <label>Password:</label>
                <input 
                type="password" 
                value={password} 
                onChange={(e)=> setPassword(e.target.value)} />
                {errors.password && <span style={{color:"red"}}password not right></span>}
                <button type="submit">Submit</button>                   
            </div>
        </form>
    )
}
export default RegEx;