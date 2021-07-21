import { useState } from "react";
import '../../Assets/CSS/Comments.css';

function NewCommentForm() {
    const [saving, setSaving] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const [newMessage, setNewMessage] = useState('');
    const [usernameWarning, setUsernameWarning] = useState('');
    const [messageWarning, setMessageWarning] = useState('');

    const updateUsername = e => setNewUsername(e.target.value);
    const updateNewMessage = e => setNewMessage(e.target.value);

    const createNewComment = () => {
        if (newUsername === '' || newMessage === '') {
            setUsernameWarning(<div className="warning">Username required</div>);
            setMessageWarning(<div className="warning">Message required</div>);
            return;
        } else {
            setUsernameWarning('');
            setMessageWarning('');
        }
        setSaving(true);

        setTimeout(() => {
            setSaving(false);
            setNewUsername('');
            setNewMessage('');
        }, 2000);
    }

    let usernameInputField = <input type="text" value={newUsername} className="form-control" onChange={updateUsername} placeholder="Enter your username" />
    let messageInputField = <textarea className="form-control" value={newMessage} onChange={updateNewMessage} placeholder="Enter your message" />
    let submitBtn = (
        <button className="btn btn-warning mt-3 form-control" onClick={createNewComment}>
            Post
        </button>
    )

    if (saving) {
        usernameInputField = <input disabled={true} type="text" value={newUsername} className="form-control" onChange={updateUsername} placeholder="Enter your username" />
        messageInputField = <textarea disabled={true} className="form-control" value={newMessage} onChange={updateNewMessage} placeholder="Enter your message" />
        submitBtn = (
            <button disabled={true} className="btn btn-warning mt-3 form-control disabled" onClick={createNewComment}>
                Saving...
            </button>
        )
    }

    return (
        <>
            <div className="row py-3 px-3 bkg-gradient-dark text-white">
                <div className="col">
                    <div>
                        <label htmlFor="username" className="form-label">Username:</label>
                    </div>
                    <div>
                        {usernameInputField}
                    </div>
                    {usernameWarning}
                </div>
            </div>
            <div className="row px-3 pb-3 bkg-gradient-dark text-white" style={{ borderRadius: '0 0 5px 5px' }}>
                <div className="col">
                    <div>
                        <label htmlFor="textarea" className="form-label" >Message:</label>
                    </div>
                    <div>
                        {messageInputField}
                        {messageWarning}
                        {submitBtn}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewCommentForm;