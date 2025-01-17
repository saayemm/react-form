

export default function StateFullForm() {

    const hundleSubmit = e => {
        
    }
  return (
    <div>
        <form onSubmit={hundleSubmit}>
            <input  type="text" name="name" />
            <br />
            <input  type="email" name="email" />
            <br />
            <input  type="password" name="password" />
            <br />
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}
