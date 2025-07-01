import React,{useState} from "react";
function SignUp(){
    const [formData, setformData] = useState({
        email:'',
        password:'',
    });// used to store the initial email 
    const [errors,setErrors] = useState({}) //used to store the errors 
    const validateForm = ()=>{  // validates inputs
        let newErrors ={};
        if(!formData.email){ // validates email
            newErrors.email ="Email is Required";
        }
        if(!formData.password){ //validates if password is empty
            newErrors.password="PAssword is required"
        }
        if(formData.password < 8){ // validates if password is shorter than the length
            newErrors.password="the length is shorter than required"
        }
        setErrors(newErrors);
        console.log(newErrors)
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit=(e) =>{
        e.preventDefault();
        if(validateForm()){
            console.log('Form submitted successfully');
        }
    };
    const handleChange=(e)=>{
        setformData({
            ...formData,
            [e.target.name]:e.target.value,
        });
        console.log(formData);
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} />
                {errors.email &&<span style={{color:'red'}}>{errors.email}</span>}
            </div>

            <div>
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                {errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
export default SignUp;