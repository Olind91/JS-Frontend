import React from 'react'
import i1 from '../assets/images/customer-service.svg'
import i2 from '../assets/images/credit-card.svg'
import i3 from '../assets/images/delivery-truck.svg'


const Support = () => {
  return (
    <section className="Support">
        <div className="container">
            <div className="support-b">
                <div>
                    <div className="support-image">
                    <img src={i1} alt="CS"></img>
                    </div>
                    <h5>Customer Support</h5>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div>
                    <div className="support-image">
                    <img src={i2} alt="CC"></img>
                    </div>
                    <h5>Customer Support</h5>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div>
                    <div className="support-image">
                    <img src={i3} alt="DT"></img>
                    </div>
                    <h5>Customer Support</h5>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div>
                    <div className="support-image">
                    <img src={i3} alt="DT"></img>
                    </div>
                    <h5>Customer Support</h5>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Support