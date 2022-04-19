import './todolist.css'

export const Todolist=({data,change})=>{

   
    return (
        <div className='main_list'>
          {data.map((e)=>{
          return <div className='add_data'>
              <h3>{e.title}</h3>
              <h3>{e.flag ? "Done":"Not Done"}</h3>
              <button onClick={()=>change(e.id)} className="btn">conform</button>
              </div>
        })}
        </div>
    )
}