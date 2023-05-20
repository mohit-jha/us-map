import React, { useState } from 'react';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        // Here you can perform login logic, such as validating the username and password
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="login_container">
            <div className="login_wrapper">
                <span className='login_greets'>Hello</span>
                <p>Sign in to manage your account</p>
                <label>
                    Username <span>*</span>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        style={{
                            borderBottom: '1px solid black',
                            marginBottom: '6px',
                        }}
                    />
                </label>
                <div style={{ marginTop: '32px' }}>

                    <label>
                        Password <span>*</span>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            style={{
                                borderBottom: '1px solid black',
                                marginBottom: '6px',
                            }}
                        />
                    </label>
                </div>

                <button
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginScreen;
