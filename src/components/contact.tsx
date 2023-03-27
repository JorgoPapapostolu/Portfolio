
export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <h2 className="contact-heading">Contact</h2>
      <div className="questionContact">Have a question or want to work together?</div>
    <form className="bigContactField">
      <input placeholder="Name" type="text" name='name' required />
      <input placeholder="Email" type="text" name='email' required />
      <textarea name="message" placeholder="Your Message"></textarea>
        <input type="submit" id="submitContact" value="SUBMIT" />
    </form>
    </div>
  );
}
