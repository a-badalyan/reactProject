import './App.css';
import Header from './components/header/header'
import Nav from './components/nav/nav';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import { BrowserRouter as Router } from "react-router-dom";


function App(props) {
  return (
    <Router>
      <div className='main'>
        <Header />
        <Nav links={props.links} />
        <Content content={props.content} contractData={props.contractData} addContract={props.addContract} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
