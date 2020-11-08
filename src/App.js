import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from './components/Header';
import Summary from './components/Summary';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Portfolio from './components/Portfolio';





function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Navbar />
        <Wrapper>
          <Route exact path="/">
            <Redirect to="/react-portfolio"/>
            </Route>
          <Route exact path="/react-portfolio" component={Summary} />
          <Route exact path="/react-portfolio/about" component={Summary} />
          <Route exact path="/react-portfolio/portfolio" component={Portfolio} />
          <Route exact path="/react-portfolio/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

// function App() {
//   return (
//     <div>
//         <Header />
//         <Summary />
//         <Footer />
//         <Contact />
//         {/* <SearchForm />
//         <Table /> */}
//         {/* <Router>
//           <div>
//             <NavTabs />
//             <Route exact path="/" component={Home} />
//             <Route exact path="/portfolio" component={Portfolio} />
//             <Route exact path="/contact" component={Contact} />
//           </div>
//         </Router> */}
//     </div>
//   );
// }

export default App;
