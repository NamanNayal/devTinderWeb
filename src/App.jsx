import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Body from "./components/Body"
import Login from "./components/Login"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"
function App() {
  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
      <Route path ="/" element={<Body/>}>
      <Route path ="/feed" element={<Feed/>}/>
        <Route path ="/login" element={<Login/>}/>
        
      </Route>
    </Routes>
    </BrowserRouter>

    </Provider>
    
    </>
  )
}

export default App
