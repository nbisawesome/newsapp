import fb from '../../assets/facebook.png';
import x from '../../assets/twitter.png';
import insta from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>TheTruth</h5>
                        <p>Craft narratives that ignite inspiration, knowledge, and entertainment</p>
                        <div>
                            <a href="https://facebook.com" className="footer-link">
                                <img src={fb} alt="Facebook" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                            </a>
                            <a href="https://twitter.com" className="footer-link">
                                <img src={x} alt="Twitter" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                            </a>
                            <a href="https://instagram.com" className="footer-link">
                                <img src={insta} alt="Instagram" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                            </a>
                            <a href="https://youtube.com" className="footer-link">
                                <img src={youtube} alt="YouTube" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-unstyled">
                            <li><a href="/all?category=business" className="footer-link" style={{ textDecoration: 'none', color: 'white' }}>Business</a></li>
                            <li><a href="/all?category=entertainment" className="footer-link" style={{ textDecoration: 'none', color: 'white' }}>Entertainment</a></li>
                            <li><a href="/all?category=technology" className="footer-link" style={{ textDecoration: 'none', color: 'white' }}>Technology</a></li>
                            <li><a href="/all?category=general" className="footer-link" style={{ textDecoration: 'none', color: 'white' }}>General</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-unstyled">
                            <li><a href="/all?category=health" className="footer-link" style={{ textDecoration: 'none', color: 'white' }}>Health</a></li>
                            <li><a href="/all?category=science" className="footer-link" style={{ textDecoration: 'none', color: 'white' }}>Science</a></li>
                            <li><a href="/all?category=sports" className="footer-link" style={{ textDecoration: 'none', color: 'white' }}>Sports</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-4"> 
                    <div className="col-md-12">
                        <p>&copy; {new Date().getFullYear()} nB co. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;