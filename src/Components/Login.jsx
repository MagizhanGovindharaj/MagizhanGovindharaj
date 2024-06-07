import { useEffect, useState } from "react";
import "../CSS/Login.css"
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function Login(){
    let [state,setstate]=useState([])
    let navigatetoTable=useNavigate()
    let emailpattern=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors={}



    let formik=useFormik({
        initialValues:{
            MailId:"",
            Password:""
        },
        onSubmit:((values)=>{
            if(values.MailId===mail.find((b)=>{return b=values.MailId}) && values.Password===pass.find((b)=>{return b=values.Password}) ){
                navigatetoTable('/login/Table')
            }else{
                errors.MailId="Invalid E-Mail"
            }
        }),
        validate:((values)=>{
            if(!values.MailId){
                errors.MailId="MailId is Required"
            }else if(!emailpattern.test(values.MailId)){
                errors.MailId="Invalid MailId"
            }

            if(!values.Password){
                errors.Password="Password is Required"
            }else if(values.Password!==pass.find((b)=>{return b=values.Password})){
                errors.Password="Invalid Password"
            }
            return errors
        })
    })
    let logintoinfo =(async()=>{
        try{
           let {data}=await axios.get("http://localhost:3000/Users")
           console.log(data);
           setstate(data)
        }
        catch(error){
            console.log(error);
        }
    })
    let mail=state.map((a)=>{return a.MailId})
    let pass=state.map((c)=>{return c.Password})
    useEffect(()=>{
        logintoinfo()
    },[])
    return(
    <section id="login">
        <h1>Login form</h1>
        <form id="loginform" onSubmit={formik.handleSubmit}>
            <div id="division">
                <input type="email" placeholder="MailId" name="MailId" onChange={formik.handleChange} value={formik.values.MailId} onBlur={formik.handleBlur} style={{height:"50px", width:"320px"}} />
                {formik.touched.MailId && formik.errors.MailId ? <div className="error">{formik.errors.MailId}</div>:null}
                <input type="password" placeholder="Password" name="Password" onChange={formik.handleChange} value={formik.values.Password} onBlur={formik.handleBlur} style={{height:"50px", width:"320px"}}/>
                {formik.touched.Password && formik.errors.Password ? <div className="error">{formik.errors.Password}</div>:null}

            </div>
            <button id="btn1" type="submit">Login</button>
        </form>
    </section>
    )
}

export default Login;