import { useState } from "react";


export default function SimpleForm() {

    const [email, setEmail] = useState(null)
    const [pass, setpass] = useState(null)
    const [name, setname] = useState(null)

    const hundleSubmit = e => {
        e.preventDefault()
        console.log(email);
        console.log(pass);
        console.log(name);
    }

    const hundleChangename = e => {
        setname(e.target.value)
    }

    const hundleEmailChange = e => {
        setEmail(e.target.value)
    }

    const hundleChangePass = e => {
        setpass(e.target.value)
    }
  return (
    <div>
        <form onSubmit={hundleSubmit}>
            <input onChange={hundleChangename} type="text" name="name" />
            <br />
            <input onChange={hundleEmailChange} type="email" name="email" />
            <br />
            <input onChange={hundleChangePass} type="password" name="password" />
            <br />
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}
