import useInputState from "../../hooks/useInputState"


const CustomHookForm = () => {

    // const [name, hundleNameChange] = useInputState("sam")
    const emailState = useInputState("sam")


    const hundleSubmit = e => {
        e.preventDefault()
        console.log("form data", emailState.value)
    }
  return (
    <div>
        <form onSubmit={hundleSubmit}>
            {/* <input value={name} onChange={hundleNameChange} type="text" name="name" /> */}
            <br />
            <input {...emailState} type="email" name="email" />
            <br />
            <input  type="password" name="password" />
            <br />
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default CustomHookForm