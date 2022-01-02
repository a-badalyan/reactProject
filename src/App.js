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
        <Content content={props.content} contractPage={props.contractPage} addContract={props.addContract} updateContractObject={props.updateContractObject}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
