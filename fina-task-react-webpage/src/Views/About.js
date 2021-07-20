import { useState } from 'react';
import Breadcrumbs from '../Components/Breadcrumbs';
import Mission from '../Components/About/Mission';
import History from '../Components/About/History';
import Involved from '../Components/About/Involved';
import Contacts from '../Components/About/Contacts';


function About() {
    const [activeTab, setActiveTab] = useState('mission');

    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'About Us' },
    ];

    let tabContent = '';
    if (activeTab === 'mission') {
        tabContent = <Mission />
    } else if (activeTab === 'history') {
        tabContent = <History />
    } else if (activeTab === 'involved') {
        tabContent = <Involved />
    }

    return (
        <div className="container-fluid" style={{backgroundColor: 'lightgrey'}}>
            <div className="row mx-5">
                <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>
            <div className="row mx-5">
                <div className="col">
                    <h4>About Us</h4>
                </div>
            </div>
            <div className="row px-5 mt-3" style={{backgroundColor: 'darkorange '}}>
                <div className="col my-5">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <button class={'nav-link' + (activeTab === 'mission' ? ' active' : '')} onClick={() => setActiveTab('mission')}>Mission statement</button>
                        </li>
                        <li class="nav-item">
                            <button class={'nav-link' + (activeTab === 'history' ? ' active' : '')} onClick={() => setActiveTab('history')}>MoMa history</button>
                        </li>
                        <li class="nav-item">
                            <button class={'nav-link' + (activeTab === 'involved' ? ' active' : '')} onClick={() => setActiveTab('involved')}>Get involved</button>
                        </li>
                    </ul>
                    <div className="my-5">{tabContent}</div>
                    
                </div>
            </div>
            <div className="row mx-5 mt-4">
                <div className="col">
                    <h4>Contacts</h4>
                    <Contacts />
                </div>
            </div>
        </div>
    );
}

export default About;
