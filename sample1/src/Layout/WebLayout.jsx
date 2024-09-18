import React, {Suspense} from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const WebLayout = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={"loading.."}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default WebLayout;