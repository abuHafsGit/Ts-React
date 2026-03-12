import Button from "./components/Button"
import ButtonStyle from "./components/ButtonStyle"
import Card from "./components/Card"
import Count from "./components/Count"
import DataFetch from "./components/DataFetch"
import Form from "./components/Form"
import Handle from "./components/Handle"
import Home from "./components/TodoApp/Home"
import User from "./components/User"

const users = [
  {
    name: 'sinan',
    age: 21,
    address: 'Rangpur'
  },
  {
    name: 'shakil',
    age: 21,
    address: 'Mithapukur'
  }
]

const App = () => {
  return (
    <div>
      {/* <div>
        <User users={users} />
        <DataFetch status='succes' />
        <Button>
          hello
        </Button>
        <Card>
          <h1>Post title is 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque iste, earum nemo error, praesentium architecto eos ex obcaecati quis, odio autem placeat vel dolore illo velit tempora ipsa animi.</p>
        </Card>
        <ButtonStyle style={{ color: 'red' }} />
        <Count />
        <Handle />

        <Form />
      </div> */}

      <Home/>
    </div>
  )
}

export default App
