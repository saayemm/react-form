import { Children } from "react"


const ReuseAbleForm = ({formTitle, hundleSubmit, submitBtnTxt= 'Submit'}) => {

    const hundleLocalSubmit = e => {
        e.preventDefault()
        const data = {
           name:  e.target.name.value,
           email:  e.target.email.value,
           pass:  e.target.pass.value,
        }
        hundleSubmit(data)
    }
  return (
    <div>
        {/* <h2>{formTitle}</h2>
         */}
         {Children}
        <form onSubmit={hundleLocalSubmit}>
            <input type="text" name="name" />
            <br />
            <input  type="email" name="email" />
            <br />
            <input  type="password" name="password" />
            <br />
            <input type="submit" value={submitBtnTxt}/>
        </form>
    </div>
  )
}

export default ReuseAbleForm