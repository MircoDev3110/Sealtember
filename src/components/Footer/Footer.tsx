import './Footer.scss';

const Footer = () => {

    return (
        
        <footer className="footer-row">
            <div className='footer-col'>
                <p className='footer-text'>{new Date().getFullYear()} - &copy;  Sealtember, Created by MircoDev3110</p>
            </div>
        </footer>

    );
}

export default Footer;