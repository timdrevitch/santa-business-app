import { FC } from "react"
import Footer from "./HeaderFooter/Footer"
import Navbar from "./HeaderFooter/Navbar"

const App: FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <div style={{ width: "100%", margin: "2rem 2rem" }}>
        Hello Dan the Santa Man 👋
      </div>
      <Footer />
    </>
  )
}

export default App
