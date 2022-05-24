import * as React from 'react';
import { useLocation } from 'react-use';

const ContactPage = () => {
  const { origin } = useLocation();

  return (
    <section className='section'>
      <div className='container'>
        <div className='content'>
          <h1>Contact</h1>
          <form name='contact' action='https://formsubmit.co/355b99fbaea3b5e971592be8bde14b2f' method='POST'>
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type='hidden' name='form-name' value='contact' />
            <input type='hidden' name='_next' value={`${origin}/contact/thanks`} />
            <input type='hidden' name='_captcha' value='false' />
            <input type='hidden' name='_subject' value='Message from Global Konvict'></input>
            <div className='field'>
              <label className='label' htmlFor={'name'}>
                Your name
              </label>
              <div className='control'>
                <input className='input' type={'text'} name={'name'} id={'name'} required={true} />
              </div>
            </div>
            <div className='field'>
              <label className='label' htmlFor={'email'}>
                Email
              </label>
              <div className='control'>
                <input className='input' type={'email'} name={'email'} id={'email'} required={true} />
              </div>
            </div>
            <div className='field'>
              <label className='label' htmlFor={'message'}>
                Message
              </label>
              <div className='control'>
                <textarea className='textarea' name={'message'} id={'message'} required={true} />
              </div>
            </div>
            <div className='field'>
              <button className='button is-link' type='submit'>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
