import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Views/Home';
import Articles from './Views/Articles';
import Article from './Views/Article';
import Comments from './Views/Comments';
import Register from './Views/Register';
import Login from './Views/Login';
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
                    <Route exact path="/articles">
                        <Articles />
                    </Route>
                    <Route path="/articles/:articleSlug">
                        <Article />
                    </Route>
                    <Route path="/comments">
                        <Comments />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
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
