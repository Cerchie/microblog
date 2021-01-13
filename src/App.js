import { BrowserRouter, Redirect } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <NavBar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/new">
                            <NewPost />
                        </Route>
                        <Route exact path="/post/:post_id">
                            <PostView />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </header>
        </div>
    )
}

export default App
