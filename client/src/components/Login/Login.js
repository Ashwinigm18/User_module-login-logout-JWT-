import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event){
        event.preventDefault()
       const response=await fetch('http://localhost:8001/api/login',{
        method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
               
                email,
                password,
            }),
        })  
        const data= await response.json();
        // console.log("the user data is",data.user);
        console.log("you login data is",data)
        if(data.status==="ok"){
           
            // window.location.href='/home'
            navigate('/home')
            localStorage.setItem('Token',data.user)
            localStorage.setItem('Name',data.name)
            console.log(localStorage);
        }else{
            alert("Please check your password and username")
        }
        
    }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser} className="container d-flex justify-content-center align-items-center border border-primary form-outline w-25 m-auto " action="">
        <div className=" justify-content-center align-items-center">
           
             <div className='form-outline w-100 py-2' >
                <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter the email" aria-label="email"/>
            </div>
             <div className='form-outline w-100 py-2' >
                <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter the password" aria-label="password"/>
            </div>
             <div className='py-2 ' >
               {/* <button className='btn btn-primary'>Register</button> */}
               <input type="submit" className='btn btn-primary' value="Login" />

            </div>
            <div>
            Not Yet Register? <Link to='/register'>Register</Link>
            </div>
        </div>
    </form>
    </div>
  )
}

export default Login
