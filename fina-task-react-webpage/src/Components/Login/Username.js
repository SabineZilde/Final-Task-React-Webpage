import Log from '../Login/Log';

function Username({ values }) {
    const { values } = Log(values);

    const usernameForSuccess = values.username;
    console.log(values)

}

export default Username;