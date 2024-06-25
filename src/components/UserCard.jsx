import React from 'react'
import './styles/UserCard.css'

const UserCard = ({ user, deleteUser, setInfoUpdate, setIsDisable }) => {

    const handleDelete = () =>{
        deleteUser('/users', user.id)
    }

    const handleEdit = () =>{
        setInfoUpdate(user)
        setIsDisable(false)
    }

  return (
    <article className='user_container'>
        <h3 className='user_title'>{user.first_name} {user.last_name}</h3>
        <ul className='user_ul'>
            <li className='user_li'><span className='user_subtitle'>Email: </span><span className='user_value'>{user.email}</span></li>
            <li className='user_li'><span className='user_subtitle'>Birthday: </span><span className='user_value'>{user.birthday}</span></li>
        </ul>
        <div className='user_btn-container'>
            <button className='user_btn' onClick={handleDelete}><i className='bx bx-trash'></i>Delete</button>
            <button className='user_btn' onClick={handleEdit}><i className='bx bx-edit-alt' ></i>Edit</button>
        </div>
    </article>
  )
}

export default UserCard