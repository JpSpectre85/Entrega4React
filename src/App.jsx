import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [infoUpdate , setInfoUpdate] = useState()
  const [isDisable, setIsDisable] = useState(false)

  const url = 'https://users-crud.academlo.tech/'
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url)

  useEffect(() =>{
    getUsers('/users')
  }, [])

  console.log(users)

  const handleNewUser = () =>{
    setIsDisable(false)
  }

  return (
    <div>
      <div className='users_header'>
      <h1 className='users_title'>Users</h1>
      <button onClick={handleNewUser} className='users_btn'>Add User</button>
      </div>
      <FormUser 
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        isDisable={isDisable}
        setIsDisable={setIsDisable}
      />
      <div className='users_container'>
        {
          users?.map(user => (
            <UserCard 
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setInfoUpdate={setInfoUpdate}
            setIsDisable={setIsDisable}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
