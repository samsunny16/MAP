const initialitems = [
  {id:1,description:"Passports",quantity:2,packed:false},
  {id:2,description:"socks",quantity:6,packed:false}
]
export default function App (){
  return <div className="app">
    <Logo/>
    <Form/>
    <PackingList/>
    <Stats/>
  </div>
}

function Logo(){
  return <h1> FAR AWAY</h1>

}
function Form(){
  return <div className="add-form">
    <h3>what do you need for the trip?</h3>
  </div>
  
}
function PackingList(){
  return <ul className="list">
    {initialitems.map((item) =>(
      <Item item = {item}/>
    ) )}
  </ul>
  
}
function Stats(){
  return <footer> stats to be </footer>
  
}
function Item( {item} ){
  return <li><span>{item.quantity}{" "}{item.description}</span><button>press</button></li>

}