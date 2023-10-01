import React from 'react';
import thanksImage from './images/illustration-thank-you.svg'
import { useParams } from 'react-router-dom'

function ThanksComponent() {

    const { rating } = useParams();

    return (
        <div className='thanks-card'>
            <section className='image'>
                <img src={thanksImage} alt='thanks image'/>
            </section>
            <span className='remark'>
                You selected {rating} out  of 5
            </span>
            <span className='thanks'>
                Thank you!
            </span>
            <p class='thanking-details'>
                We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
            </p>
        </div>
    )
}

export default ThanksComponent;