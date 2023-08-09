import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import Form from "./Form"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter /> */}
        <Form></Form>
      </header>
    </div>
  )
}

export default App
