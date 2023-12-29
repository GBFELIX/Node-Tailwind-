import { Body } from "./Components/body"
import { Flexing } from "./Components/socialbuttons"
import { Dark } from "./Components/Dark"
import { Container } from "./Components/Container"
import { Login } from "./Components/Login"

export default function App() {
  return (
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <br></br>
        <Body/>
        <div><br/>
        <Flexing/>
        </div><br />
        <Dark/><br/>
        <Container/><br />
        <Login/>
      </div>      
  )
}