import { Navigate, Route, Routes } from "react-router-dom"
import { CharactersPage, TitanPage, HumanPage} from "../pages"
import { Navbar } from "../../ui/components"
import { TitansList } from "../components/TitansList"
export const CharacterRouter = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/humans" element= {<HumanPage/>} />
        <Route path="/titans" element= {<TitansList/>} />
        <Route path="/titans/:name" element= {<TitanPage/>} />
        <Route path="/humans/:name" element= {<CharactersPage/>} />
        <Route path="/" element= {<Navigate to="/humans"/>} />
      </Routes>
    </>
  )
}
