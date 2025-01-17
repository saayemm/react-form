import Bro from "../bro/Bro"
import Myself from "../myself/Myself"
import Sister from "../sister/Sister"

const Dad = () => {
  return (
    <div>
        <h2>dad</h2>
        <section className="flex">
        <Myself></Myself>
        <Bro></Bro>
        <Sister></Sister>
        </section>
    </div>
  )
}

export default Dad