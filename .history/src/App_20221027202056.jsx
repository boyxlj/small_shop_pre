import { useRoutes } from "react-router-dom"
import routes from "./router/routes"
import Header from "./components/header"
import Footer from "./components/footer";
import Login from "./components/login"
import Register from "./components/register"
import SuccessTip from "./components/successTip";
import PayDialog from "./components/payDialog";
import AddressDialog from "./components/addressDialog"
import SelectAddressDialog from "./components/selectAddressDialog"
import { TransitionGroup } from 'react-transition-group';
function App() {
  const element = useRoutes(routes)
  return (
    <>
      <Header />
      <Login />
      <Register />
      <SuccessTip />
      <PayDialog />
      <AddressDialog />
      <SelectAddressDialog />
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="item">
        {element}
        </CSSTransition>
      </TransitionGroup>

   
      <Footer />
    </>
  )
}


export default App
