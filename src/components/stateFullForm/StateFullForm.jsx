import { useState } from "react"


export default function StateFullForm() {

    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [pass, setPass] = useState(null)
    const [error, setError] = useState('')

    const hundleSubmit = e => {
        e.preventDefault()
        if(pass.length < 6 ){
            setError("Password must be atleat 6 character long")
        }else{
            setError('')
            console.log(email, name, pass)
        }
        
    }

    const hundleEmailChange = e => {
        setEmail(e.target.value)
    }

    const hundlePassChange = e  => {
        setPass(e.target.value)
    }

    const hundleNameChange = e  => {
        setName(e.target.value)
    }

  return (
    <div>
        <form onSubmit={hundleSubmit}>
            <input onChange={hundleNameChange}  type="text" name="name" />
            <br />
            <input onChange={hundleEmailChange}  type="email" name="email" />
            <br />
            <input onChange={hundlePassChange} type="password" name="password" />
            <br />
            <input type="submit" value="Submit"/>
            {
                error && <p>{error}</p>
            }
        </form>
    </div>
  )
}
