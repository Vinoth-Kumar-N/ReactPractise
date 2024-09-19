import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/useSlice';

const Navbar = () => {
  const userdata = useSelector(selectUser);
  return (
    <div>
      {userdata?.name || "not available"}
    </div>
  )
}

export default Navbar