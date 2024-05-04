import List from "./components/lists"

function App() {

  const animals = ["Dog", "Cat", "Cow", "Lion", "Tiger", "Elephant"]
  const birds = ["Peacock", "crow", "parrot", "Duck"]

  return(
        <>
            <List item={animals} type="animals"/>
            <List item={birds} type="birds"/>
        </>

  )
}

export default App
