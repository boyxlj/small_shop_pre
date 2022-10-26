import {useRoutes} from "react-router-dom"
import routes from "./router/routes"
import Header from "./components/header"
import Footer from "./components/footer";
import Login from "./components/login"
import Register from "./components/register"
import SuccessTip from "./components/successTip";
import PayDialog from "./components/payDialog";
import AddressDialog from "./components/addressDialog"
import SelectAddressDialog from "./components/selectAddressDialog"
function App() {
  const element = useRoutes(routes)
  return (
    <>
     <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
    <Header/>
    <Login/>
    <Register/>
    <SuccessTip/>
    <PayDialog/>
    <AddressDialog/>
    <SelectAddressDialog/>
    {element}
    <Footer/>
    </>
  )
}


export default App
