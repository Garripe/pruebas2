
import { useEffect, useState } from 'react';
import './App.css';
import DataTable from './components/DataTable';
import SideBar from './components/SideBar';
import { getUsers } from './services/data';



function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    const users = await getUsers()
    users.map((user) => {
      user.last_login = new Date(user.last_login).toLocaleString()
      return user
    })
    setUsers(users)
  }

  return (
    <div style={{ height: "calc(100vh - 10rem)" }} className='py-[1.5rem] px-[2rem] bg-slate-800 w-full '>
      <div className='flex h-full flex-row'>
        <SideBar />
        <div className='flex-1 bg-white h-full'>
          <div className='p-4 h-full overflow-hidden'>
            {users?.length > 0 &&
              <DataTable users={users} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}


export default App
