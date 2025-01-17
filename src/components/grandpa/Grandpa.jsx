import Anty from "../anty/Anty"
import Dad from "../dad/Dad"
import Uncle from "../uncle/Uncle"
import './Grandpa.css'

const Grandpa = () => {
  return (
    <div className="grandpa">
        <h2>Grandpa</h2>
       <section className="flex">
       <Dad></Dad>
        <Uncle></Uncle>
        <Anty></Anty>
       </section>
    </div>
  )
}

export default Grandpa