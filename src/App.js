import './App.css';
import Header from './components/header/header'
import Nav from './components/nav/nav';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import { BrowserRouter as Router } from "react-router-dom";




function App() {

  let content = [
    {routeName: 'Главная страница', routeUrl: '/main'},
    {routeName: 'Страница 1', routeUrl: '/link1'},
    {routeName: 'Страница 2',  routeUrl: '/link2'},
    {routeName: 'Страница 3',  routeUrl: '/link3'},
    {routeName: 'Страница 4',  routeUrl: '/link4'}
  ]

  
  return (
    <Router>
      <div className='main'>
        <Header />
        <Nav />
        <Content content={content}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
