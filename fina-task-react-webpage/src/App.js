import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Views/Home';
import Articles from './Views/Articles';
import Chat from './Views/Chat';
import Register from './Views/Register';
import About from './Views/About';

import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/articles">
                        <Articles />
                    </Route>
                    <Route path="/chat">
                        <Chat />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
