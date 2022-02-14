import React,{useState} from 'react'

const App = () => {
const [data, setData] = useState([])

  fetch('http://167.99.3.74:3001/api/assets')
  .then(response => response.json())
  .then(json =>   setData(json)) 

  console.log(data);

  return (
    <div>

{data.slice(1,5).map((elem)=>{
return  <h1>{elem.name.slice(5,2)}</h1>
})}

    </div>
  )
}

export default App