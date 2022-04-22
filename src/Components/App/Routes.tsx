import React from "react";
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Routes,
  Link,
} from "react-router-dom";
import { About } from '../About/About';
import { Banner } from '../Banner/Banner';
import { Header } from '../Header/Header';
import { Work } from '../Work/Work';
import { Contact } from '../Contact/Contact';
import { Parallax,ParallaxProvider } from 'react-scroll-parallax';





interface Routes {

}

export const Routers: React.FC<Routes> = () => {



  return (
    <section className='routes'>
      <Header />
     
                
      <Banner />
     
      <About />
      <Work />
      <Contact />
      <HashRouter>
        <Routes>
          <Route path='' element={
            <>



            </>
          }></Route>



        </Routes>
      </HashRouter>
    </section>
  );
}