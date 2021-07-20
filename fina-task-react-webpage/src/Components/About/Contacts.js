function Contacts() {
    return (
    
    <div className="row mb-5 mt-4">
        <div className="col">
            <div>
                <iframe width="500" height="400" frameborder="0" title="map"
                    src="https://www.bing.com/maps/embed?h=400&w=500&cp=56.92842678239299~24.007467250022714&lvl=14&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
                    scrolling="no">
                </iframe>
                <div style={{whiteSpace: 'nowrap', textAlign: 'center', width: '500px', padding: '6px 0'}}>
                    <a id="largeMapLink" target="_blank" rel="noreferrer"
                        href="https://www.bing.com/maps?cp=56.92842678239299~24.007467250022714&amp;sty=r&amp;lvl=14&amp;FORM=MBEDLD">View
                        Larger Map</a> &nbsp; | &nbsp;
                    <a id="dirMapLink" target="_blank" rel="noreferrer"
                        href="https://www.bing.com/maps/directions?cp=56.92842678239299~24.007467250022714&amp;sty=r&amp;lvl=14&amp;rtp=~pos.56.92842678239299_24.007467250022714____&amp;FORM=MBEDLD">Get
                        Directions</a>
                </div>
            </div>
        </div>
        <div className="col">
            <h6>Address</h6>
            <p>Kalnciema street 186, Marupe district, LV-2167, Latvia</p>
            <h6>E-mail</h6>
            <p><a href="mailto:info@greatart.lv">info@greatart.lv</a></p>
            <h6>Phone</h6>
            <p>+371 29234567</p>
        </div>
    </div>
    )
}

export default Contacts;