import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contacts() {
    return (
        <>
            <div className="row mb-5 mt-4">
                <div className="col">
                    <div style={{ overflow: 'hidden', maxWidth: '100%', width: '500px', height: '500px' }}>
                        <div id="embedmap-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
                            <iframe title="map" style={{ height: '100%', width: '100%', border: '0' }} frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=kalnciema+186+riga&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                            </iframe>
                        </div>
                        <a className="codefor-googlemap" href="https://www.embed-map.com" id="grab-mapdata">
                            https://www.embed-map.com
                        </a>
                    </div>
                </div>
                <div className="col">
                    <h5><b>Address</b></h5>
                    <p>Kalnciema street 186, Marupe district, LV-2167, Latvia</p>
                    <h5><b>E-mail</b></h5>
                    <p><a href="mailto:info@greatart.lv">info@greatart.lv</a></p>
                    <h5><b>Phone</b></h5>
                    <p>+371 29234567</p>
                    <h5><b>Connect</b></h5>
                    <div>
                        <a className="icon" href="https://www.github.com"><FontAwesomeIcon icon={faGithub} /></a>&nbsp;&nbsp;
                        <a className="icon" href="https://www.github.com"><FontAwesomeIcon icon={faTwitter} /></a>&nbsp;&nbsp;
                        <a className="icon" href="https://www.github.com"><FontAwesomeIcon icon={faInstagram} /></a>&nbsp;&nbsp;
                        <a className="icon" href="https://www.github.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>&nbsp;&nbsp;
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">

                </div>
            </div>
        </>
    )
}

export default Contacts;