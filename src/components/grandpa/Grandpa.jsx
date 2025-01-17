import { createContext } from "react"
import Anty from "../anty/Anty"
import Dad from "../dad/Dad"
import Uncle from "../uncle/Uncle"
import './Grandpa.css'

export const AssetContext = createContext("gold")

const Grandpa = () => {
  return (
    <div className="grandpa">
        <h2>Grandpa</h2>
        <AssetContext.Provider value="gold">
            <section className="flex">
                <Dad></Dad>
                 <Uncle></Uncle>
                 <Anty></Anty>
             </section>
        </AssetContext.Provider>
    </div>
  )
}

export default Grandpa