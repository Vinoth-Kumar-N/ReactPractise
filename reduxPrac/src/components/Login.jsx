import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../redux/useSlice'

const Login = () => {
    const dispatch = useDispatch();
    const uname = useRef(null);

    const handleLog = (e) => {
        e.preventDefault();
        dispatch(login({
            name: uname.current.value
        }))
    }
    return (
        <>
            <form onSubmit={handleLog}>
                <input type="text" name="name" ref={uname} id="" />
                <button type='submit' onClick={handleLog}>Login</button>
            </form>
            <button onClick={() => dispatch(logout())}>Logout</button>

        </>
    )
}

export default Login