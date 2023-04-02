import github from '../img/footericons/github.png';
import linkedin from '../img/footericons/linkedin.png';
import pageup from '../img/footericons/pageup.png';

export default function Footer() {
    return (
        <div className="footer">
            <a href="#home">
            <div className="homejump">
                <img src={pageup} alt="pageupIcon" />
            </div></a>
            <div className="icon-wrap" >
                <a href="https://www.linkedin.com/in/jorgos-papapostolu/" className='linkedinLink' target='_blank' rel='noreferrer'>
                    <div className="flex icon" id='icon-1'>
                        <img src={linkedin} alt="linkedinicon"/>
                    </div>
                </a>
                <a href="https://github.com/JorgoPapapostolu" className='githubLink' target='_blank' rel='noreferrer'>
                    <div className='flex icon' id='icon-2'>
                        <img src={github} alt="githubicon"/>
                    </div>
                </a>
            </div>
            <div className="info-box">
                <div className='copyright'>
               JORGOS PAPAPOSTOLU <span className='copyHighlight'>&copy;2023</span>
                </div>
            </div>
        </div>
    )
}