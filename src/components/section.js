import React from 'react';
import { isAuthenticated } from '../utils/utils';

const Section = ({ children, history }) => {
    return (
        <section>
            {isAuthenticated() &&
                children
            }
            {!isAuthenticated() &&

                history.push('/signin/')
            }
        </section>
    )
}

export default Section
