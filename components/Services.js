import React from 'react'
import { ServiceComponent } from './ServiceComponent'


export const Services = () => {
    const services = [
        {id: 1, title: 'Personal Care', img: '/images/p2p/services/personalcare.png', desc: 'Assistance with activities of daily living (ADLs) such as bathing, dressing, grooming, and toileting.'},
        {id: 2, title: 'Companionship', img: '/images/p2p/services/companionship.png', desc: 'Providing companionship, conversation, and social interaction to combat loneliness and isolation.'},
        {id: 3, title: 'Medication', img: '/images/p2p/services/medication.png', desc: 'Ensuring that clients take their medications as prescribed.'},
        {id: 4, title: 'Meal Preparation', img: '/images/p2p/services/mealpreparation.png', desc: 'Cooking nutritious meals and helping with feeding if necessary.'},
        {id: 5, title: 'Light Housekeeping', img: '/images/p2p/services/lighthousekeeping.png', desc: 'Assistance with light cleaning, laundry, and household chores.'},
        {id: 6, title: 'Transportation', img: '/images/p2p/services/transportation.png', desc: 'Helping clients get to medical appointments, grocery shopping, or other errands.'},
        {id: 7, title: 'Mobility Assistance', img: '/images/p2p/services/mobilityassistance.png', desc: 'Assisting clients with walking, transferring, and using mobility aids.'},
        {id: 8, title: 'Dementia Care', img: '/images/p2p/services/dementiacare.png', desc: 'Specialized care for individuals with cognitive impairments.'},
        {id: 9, title: 'Respite Care', img: '/images/p2p/services/respitecare.png', desc: 'Providing temporary relief to family caregivers.'},
        {id: 10, title: 'Hospice Care', img: '/images/p2p/services/hospice.png', desc: 'End-of-life care and support for terminally ill individuals.'},
        {id: 11, title: 'Rehabilitation Care', img: '/images/p2p/services/rehab.png', desc: 'Assisting individuals in their recovery process after surgery or illness.'},
        {id: 12, title: 'Chronic Management', img: '/images/p2p/services/chronic.png', desc: 'Care for individuals with chronic illnesses, such as diabetes or heart disease.'},
        {id: 13, title: 'Palliative Care', img: '/images/p2p/services/palliative.png', desc: 'Focusing on pain management and comfort for seriously ill individuals.'},
        {id: 14, title: '24-Hour Care', img: '/images/p2p/services/247.png', desc: 'Continuous care provided around the clock.'},
        {id: 15, title: 'Specialized Care', img: '/images/p2p/services/specializedcare.png', desc: 'Tailored services for specific conditions or needs.'},

    ]
  return (
    <div className='services-container'>
        <div className='services'>
            <h3>Services we provide</h3>
            <div className='service-center'>
                <div className='service-grid'>
                    {
                        services?.map(item => <div className='service-row' key={item.id}>
                            <ServiceComponent title={item.title} img={item.img} desc={item.desc}/>
                        </div>)
                    }

                </div>
            </div>
        </div>
    </div>
  )
}
