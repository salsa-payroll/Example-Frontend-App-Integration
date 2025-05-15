import './App.css';
import { About, Dashboard, Header, NavBar, Payroll } from './components';
// import { useScript } from './hooks/useScript';
// import { useState } from 'react';
// import { loadSalsaJs } from "@salsa-payroll/salsa-js";

function App() {
  /**
   * Load & Initialize Salsa via Script
   *
   * This initialization is required only once for the application.
   *
   * You can override the application URL that salsa.js will load the embedded UI
   * from by passing an initialization parameter to the library:
   * window.Salsa('my-public-app-apikey', {env: 'sandbox'});
   */
  // useScript('https://js.salsa.dev/v0');
  // const [salsa, setSalsa] = useState();
  // if(window.Salsa && !salsa) {
  //   setSalsa(window.Salsa('my-public-client-key', {env: 'sandbox'}));
  // }

  /**
   * Load & Initialize Salsa via Library
   *
   * This initialization is required only once for the application.
   */
  // const [salsa, setSalsa] = useState();
  // useEffect( () => {
  //  loadSalsaJs('my-public-client-key', {env: 'sandbox'})
  //    .then((salsaJs)=>setSalsa(salsaJs));
  // }, [salsa]);

    return (
    <div className="App">
      <Header />
      <div className="content">
        <NavBar />
        <Router />
         {/*<Router salsa={salsa}/>*/}
      </div>
    </div>
  );
}

const Router = ({ salsa }) => {
  const path = new URL(window.location.href).pathname;
  return (
    <div className="pageContainer">
      <div className="page">
        {path === '/payroll' ? (
          <Payroll salsa={salsa} />
        ) : path === '/about' ? (
          <About />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
};

export default App;
