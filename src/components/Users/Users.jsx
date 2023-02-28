
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../../redux/users/operationsUsers'

export const Users = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers());
    },[])
  return (
    <div>Users</div>
  )
}

