import React, { Fragment } from 'react';

import Footer from '../Footer';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';


import useForecast from '../../hooks/useForecast';

import style from '../Page/Page.module.css';
const Page = () => {
    const {isError, isLoading, forecast, submitRequest} = useForecast();
    const onSubmit =  (value) => {
        submitRequest(value)
    }
    return (
        <Fragment>
            {!forecast && (
                <div className={`${style.box} position-relative`}>                    
                        {/* Form */}
                        {!isLoading && <Form submitSearch={onSubmit}/>}

                        {/* Error */}
                        {isError && <Error message={isError} />}

                        {/* Loader */}
                        {isLoading && <Loader />}
                </div>
            )}
              {/* Forecast */}
              {forecast && <Forecast forecast={forecast}/>}
              <Footer />
        </Fragment>
    );
};

export default Page;