import Cousin from "../cousin/Cousin"

const Uncle = () => {
  return (
    <div>
        <h2>Uncle</h2>
        <section className="flex">
            <Cousin name={"Somi"}></Cousin>
            <Cousin name={"Bonni"}></Cousin>
        </section>
    </div>
  )
}

export default Uncle