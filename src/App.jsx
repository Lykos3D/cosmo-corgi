import { createGlobalStyle } from 'styled-components';
import Home from './components/Home';
import {createBrowserRouter, Route, Routes, RouterProvider} from 'react-router-dom';
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Connect from "./components/Connect.jsx";
import Customize from "./components/Customize.jsx";
import Pet from "./components/Pet.jsx";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`
const router = createBrowserRouter(
    [{path:"*", Component: Root},]
);

function Root(){
    return(
        <>
            <Routes>
                <Route path={`/*`} component={<Home />} />
                <Route path={`/login`} component={<Login />} />
                <Route path={`/signup`} component={<Signup />} />
                <Route path={`/connect`} component={<Connect />} />
                <Route path={`/customize`} component={<Customize />} />
                <Route path={`/pet`} component={<Pet />} />
            </Routes>
        </>
    )
}


export default function App() {

  return (
    <>
        <GlobalStyle />
        <RouterProvider router={router} />
    </>
  )
}