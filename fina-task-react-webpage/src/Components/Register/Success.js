import '../../Assets/CSS/Register.css';

function Success({value}) {
    console.log(value.username)
    return (
        <div className="form-content-right">
            <div className="form-success">
                We have received your registration!
            </div>
            <img src="https://image.flaticon.com/icons/png/512/1646/1646832.png" alt="success" className="form-img-2"/>
        </div>
    )
}

export default Success;