import React, { useRef, useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export default function Contact(): JSX.Element {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_umnrcvz', 'template_71mdg8i', form.current!, '1OSRg6qV6GdbU-sOx')
      .then((response: EmailJSResponseStatus) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSent(true);
          form.current?.reset();
      }, (error) => {
          console.log('FAILED...', error);
      });
  };

  return (
    <div className='contact' id='contact'>
      <h2 className="contact-heading">Contact</h2>
      <div className="questionContact">Have a question or want to work together?</div>
      <form ref={form} onSubmit={sendEmail} className="bigContactField">
        <input placeholder="Name" type="text" name='name' required />
        <input placeholder="Email" type="text" name='email' required />
        <textarea name="message" placeholder="Your Message"></textarea>
        <input type="submit" id="submitContact" value="Send" />
        {isSent && <div className="confirmation-message">Your message has been sent. Thank you!</div>}
      </form>
    </div>
  );
}
