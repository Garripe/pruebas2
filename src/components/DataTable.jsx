export default function DataTable({users=[]}){
    return(
        <div className="h-full flex flex-col overflow-y-auto">
        <div className="flex bg-white sticky top-0">
          <div className="border px-4 py-2 flex-1 font-bold">Name</div>
          <div className="border px-4 py-2 flex-1 font-bold">Age</div>
          <div className="border px-4 py-2 flex-1 font-bold">Available</div>
          <div className="border px-4 py-2 flex-1 font-bold">Last Login</div>
        </div>
        <div className="flex-1" >
          {users.map((user, index) => (
            <div key={index} className="flex ">
              <div className="truncate border px-4 py-2 flex-1">{user.name}</div>
              <div className="border px-4 py-2 flex-1">{user.age}</div>
              <div className={`border px-4 py-2 flex-1 ${user.available ? 'bg-green-400' : 'bg-red-500'}`}>{user.available ? 'True' : 'False'}</div>
              <div className="border px-4 py-2 flex-1">{user.last_login}</div>
            </div>
          ))}
        </div>
      </div>
    )
}