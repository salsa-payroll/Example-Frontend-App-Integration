import '../App.css';
import { useEffect } from "react";

const Payroll = ({salsa}) => { 
  useEffect(() => {
    if (salsa) {
      //***************** EMBED SALSA EXPRESS HERE *****************//

    /**
     * Choose the component to embed
     *
     * Salsa Express has multiple elements you can embed into your application.  Choose which you'd like to embed.
     * */

    /**
     * Demo component
     *
     * This simple component allows you to test the ability to embed without having to have any auth tokens configured
     */
    // const salsaElement = salsa.elements.create('demo');

    /**
     * Employer Dashboard component
     *
     * This component embeds the payroll run flow and list of past payroll runs.
     * For this component, you must have an Employer & Workers configured in the backend and
     * a userToken provisioned for the Employer.
     * In this case the employerId and userToken parameter are hardcoded, but in practice these
     * values would be passed down at runtime through the partner app.
     */
    // const USER_TOKEN = ""
    // const SALSA_EMPLOYER_ID = ""
    // const salsaElement = salsa.elements.create('employer-dashboard', {userToken: USER_TOKEN, employerId: SALSA_EMPLOYER_ID});

    /**
     *  Mount the element into this application's DOM at the specified location.
     */
    // salsa.elements.mount(salsaElement, '#salsa-container');

    return () => {
      /**
       * When this component unmounts, cleanup the Salsa element
       */
      // salsa.elements.destroy(salsaElement);
    };
    }
    return;  
  }, [salsa]);

  return (
    <div>
      {/* Create a container to host the embedded Salsa UI */}
      {/* <div id='salsa-container' style={{height: 'calc(100vh - 150px)'}}/> */}
      <div>
        <h3>
          To learn how to embed Salsa Express UI follow the{' '}
          <a
            href="https://docs.salsa.dev/docs/express-embedded-ui"
            target="_blank"
            rel="noreferrer"
          >
            Salsa Express - Quickstart guide
          </a>
          .
        </h3>
      </div>
    </div>
  );
}

export default Payroll;
