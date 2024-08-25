import { Link } from "react-router-dom";


export default function Contact() {
  return (
    <>
        <div className="contact_wrapper">
            <hi className='getInTouch'>Get In Touch</hi>
            <div className="cContent">
            I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll get back to you <span>ASAP</span>!
            </div>
            <Link to="mailto:tusharkumar2002working@gmail.com"><div className="btn" >Say Hello</div></Link>
            <div className="copyright">&#169; Design and Build by Tushar </div>
        </div>
    </>
  )
}
