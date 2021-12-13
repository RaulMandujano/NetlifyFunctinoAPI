import React, { Suspense } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Redirect } from 'react-router-dom'

import ButtonAppBar from './components/ButtonAppBar'
import BasicTabs from './components/BasicTabs'
import Container from '@mui/material/Container'

// import HeroDetails from  './components/HeroDetails';
// import Welcome from "./components/Welcome";
// import Login from "./login/LoginForm";
// import SignUp from "./login/SignupForm";

const HeroDetails = React.lazy(() => import('./components/HeroDetails'))
const Welcome = React.lazy(() => import('./components/Welcome'))
const Login = React.lazy(() => import('./login/LoginForm'))
const SignUp = React.lazy(() => import('./login/SignupForm'))

const App = () => {
  return (
    <div>
      <ButtonAppBar />

      <Suspense fallback={<h1>Loaing....</h1>}>
        <Route path="/" exact>
          <Redirect to="welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>

        <Route path="/heroes">
          {' '}
          <BasicTabs />
        </Route>

        <Container maxWidth="md">
          <Route path="/herodetails/:id" exact>
            <HeroDetails />
          </Route>
        </Container>

        <Container maxWidth="sm">
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Container>
      </Suspense>
    </div>
  )
}

export default App
