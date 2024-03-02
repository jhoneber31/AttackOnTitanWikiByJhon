import { Route, Routes } from "react-router-dom"
import { CharacterRouter } from "../characters/routes/CharacterRouter"
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<CharacterRouter/>} />
      </Routes>
    </>
  )
}
