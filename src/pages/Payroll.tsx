import { PageContainer } from '@ant-design/pro-layout';
import React, { useEffect } from 'react';

const Payroll: React.FC = () => {
  useEffect(() => {
    //***************** EMBED SALSA EXPRESS HERE *****************//

    /**
     * Initialize Salsa
     *
     * This initialization is required only once for the application, so in practice
     * it would be elsewhere and is only here currently for simple demo purposes.
     *
     * You can override the application URL that salsa.js will load the embedded UI from by passing an initialization parameter to the library:
     * const salsa = window.Salsa('my-public-app-apikey', {env: 'sandbox'});
     */
    // const salsa = window.Salsa('my-public-app-apikey');

    // if (salsa) {
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
    // }
    return;
  }, []);

  return (
    <PageContainer>
      {/* Create a container to host the embedded Salsa UI */}
      {/* <div id='salsa-container' style={{height: 'calc(100vh - 292px)'}}/> */}
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
    </PageContainer>
  );
};

export default Payroll;
