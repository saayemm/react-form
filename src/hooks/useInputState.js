import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue)

    // const hundleChange = e => {
    //     setValue(e.target.value)
    // }
    const onChange = e => {
        setValue(e.target.value)
    }
    // return [value, hundleChange]
    return {
        value,
       onChange
    }
}

export default useInputState;