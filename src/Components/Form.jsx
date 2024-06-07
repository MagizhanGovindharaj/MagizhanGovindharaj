import { Fragment, useEffect, useRef, useState } from "react";
import "../CSS/Form.css"
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function Form(){
    let [signup,setsignup]=useState([])
    let navigatetologin=useNavigate()
    let letterpattern=/^[a-zA-z]*$/;
    let emailpattern=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let numberpattern = /^[0-9]*$/

    let formik = useFormik({
        initialValues:{
            FirstName:"",
            LastName:"",
            MailId:"",
            Number:"",
            Password:"",
            CPassword:"",
        },
        onSubmit:(async(values)=>{
            try{
                await axios.post("http://localhost:3000/Users",formik.values)
            }
            catch(error){
                console.log(error);
            }
            navigatetologin('/signup/Login')
        }),
        validate:((values)=>{
            let errors={}
            if(!values.FirstName){
                errors.FirstName="Firstname is Mandatory"
            }else if(!letterpattern.test(values.FirstName)){
                errors.FirstName="Firstname is Invalid"
            }

            if(!values.LastName){
                errors.LastName="Lastname is Mandatory"
            }else if(!letterpattern.test(values.LastName)){
                errors.LastName="Firstname is Invalid"
            }

            if(!values.Number){
                errors.Number="Number is Required"
            }else if(!numberpattern.test(values.Number)){
                errors.Number="Invalid Number"
            }else if(values.Number==num.find((b)=>{return b==values.Number})){
                errors.Number="User with this Number Already Exists"
            }

            if(!values.MailId){
                errors.MailId="Email is Required"
            }else if(!emailpattern.test(values.MailId)){
                errors.MailId="Invalid Email Address"
            }else if(values.MailId===mail.find((b)=>{return b===values.MailId})){
                errors.MailId="User with this MailId Already Exists"
            }

            if(!values.Password){
                errors.Password="Password is Required"
            }else if(values.Password.length<8){
                errors.Password="Password should contain more than 8 Characters"
            }

            if(!values.CPassword){
                errors.CPassword="Confirm password is Mandatory"
            }else if(values.CPassword!==values.Password){
                errors.CPassword="Password is Not Matching"
            }
            return errors
        })
    })
 
    let getdata=(async()=>{
        try{
            let {data}=await axios.get("http://localhost:3000/Users")
            console.log(data);
            setsignup(data)
        }
        catch(error){

        }
    })

    console.log(signup);

    let num=signup.map(({Number})=>{
        return Number
    })
    let mail=signup.map(({MailId})=>{
        return MailId
    })
    console.log(mail);
    console.log(num);

    useEffect(()=>{
        getdata()
    },[])

    // console.log(formik.values);
    // console.log(formik.errors);
    // console.log(formik.touched);

    
    return(
    <section className="register">
        <h1>Registration form</h1>
        <form id="form" onSubmit={formik.handleSubmit} >
            <div id="fname">
                <input type="text" placeholder="FirstName" name="FirstName"  onChange={formik.handleChange} value={formik.values.FirstName} onBlur={formik.handleBlur} />
                {formik.touched.FirstName && formik.errors.FirstName ? <div className="error">{formik.errors.FirstName}</div>:null}
            </div>
            <div id="lname">
                <input type="text" placeholder="LastName" name="LastName" onChange={formik.handleChange} value={formik.values.LastName} onBlur={formik.handleBlur} />
                {formik.touched.LastName && formik.errors.LastName ? <div className="error">{formik.errors.LastName}</div>:null}
            </div>
            <div id="gmail">
                <input type="email" placeholder="MailId" name="MailId" onChange={formik.handleChange} value={formik.values.MailId} onBlur={formik.handleBlur} />
                {formik.touched.MailId && formik.errors.MailId ? <div className="error">{formik.errors.MailId}</div>:null}
            </div>
            <div id="cnumber">
                <input type="tel" placeholder="Contact Number" name="Number" onChange={formik.handleChange} value={formik.values.Number} onBlur={formik.handleBlur} />
                {formik.touched.Number && formik.errors.Number ? <div className="error">{formik.errors.Number}</div>:null}
            </div>
            <div id="pass">
                <input type="password" placeholder="Password" name="Password" onChange={formik.handleChange} value={formik.values.Password} onBlur={formik.handleBlur} />
                {formik.touched.Password && formik.errors.Password ? <div className="error">{formik.errors.Password}</div>:null}
            </div>
            <div id="cpass">
                <input type="password" placeholder="Confirm Password" name="CPassword" onChange={formik.handleChange} value={formik.values.CPassword} onBlur={formik.handleBlur} />
                {formik.touched.CPassword && formik.errors.CPassword ? <div className="error">{formik.errors.CPassword}</div>:null}
            </div>
            <button id="btn" type="submit">Register</button>
        </form>
    </section>
    )
}

export default Form;