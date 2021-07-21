function LogValid(values) {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = 'Username required'
    }

    if (!values.password) {
        errors.password = 'Password required'
    } else if (values.password.length < 8) {
        errors.password = 'Password needs to be 8 characters or more'
    }

    return errors;

}

export default LogValid;