import { useState, useEffect } from 'react';
import '../customCSS/Contact.css'
import { Envelope, GeoAlt, TelephoneFill } from 'react-bootstrap-icons';

function Contact() {
    const [formData, setFormData] = useState({
        'subject':'',
        'fullName': '',
        'email': '',
        'phone': '',
        'message': ''
    })
    const [anyEmptyInput, setAnyEmptyInput] = useState(true)
    const [seeForm, setSeeForm] = useState(false) 


    const updateFormData = (e) => {
        const {name, value} = e.target;

        setFormData(prev => {
            return {...prev, [name]: value}
        })
    }

    const openForm = () => {
        setSeeForm(true)
    }
    useEffect(() => {

        setAnyEmptyInput(() => {
            return (Object.values(formData).some(item => item === ''))
        })

    }, [formData])

    return (
        <div className='row contact g-3 justify-content-center'>
            <div className='col-12 col-md-6 details-wrapper'>
                <div className='details'>
                    <h5>You can reach us to inquire about our books through the following contact details</h5>
                    <p><Envelope /> info@simpson.com</p>
                    <p><GeoAlt /> 14B Milakkwee Avenue NYC</p>
                    <p><TelephoneFill /> +49 015 0148</p>
                    <h6>You can also leave us an inquiry <span onClick={openForm} className='fw-bold text-secondary'>here</span></h6>
                </div>
            </div>
            {seeForm && <div className='col-12 col-md-6 Form-wrapper'>
                <div className='Form'>
                    <div className='row g-3'>
                        <div className='col-12'>
                            <input type='text' onChange={updateFormData} value={formData.subject} className='form-control' name='subject' placeholder='Subject*' />
                        </div>
                        <div className="col-12">
                            <input type="text" onChange={updateFormData} value={formData.fullName} className="form-control" name='fullName' placeholder="Full Name*" />
                        </div>
                        <div className="col-12">
                            <input type="email" onChange={updateFormData} value={formData.email} className="form-control" name='email' placeholder="Email*" />
                        </div>
                        <div className="col-12">
                            <input type="text" onChange={updateFormData} value={formData.phone} className="form-control" name='phone' placeholder="Phone*" />
                        </div>
                        <div className="col-12">
                            <textarea onChange={updateFormData} className="form-control" value={formData.message} rows={10} placeholder='Write your message*' name='message' />
                        </div>
                        <div className='col-12'>
                        <button disabled={anyEmptyInput} className='btn btn-outline-secondary w-100'>Submit Inquiry</button>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Contact