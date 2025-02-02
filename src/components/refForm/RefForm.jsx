import { useEffect, useRef } from "react"

export default function RefForm() {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passRef = useRef(null)

    useEffect(()=>{
        nameRef.current.focus()
    },[])

    const hundleSubmit = e => {
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passRef.current.value)
    }
  return (
    <div>
         <form onSubmit={hundleSubmit}>
            <input ref={nameRef} type="text" name="name" />
            <br />
            <input ref={emailRef}  type="email" name="email" />
            <br />
            <input ref={passRef} type="password" name="password" />
            <br />
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}
