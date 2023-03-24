import './App.css';

function App() {
  return (
    <div className="App">
      <div className="add-item-box">
        <input id="add-item"></input>
        <button>add item</button>
      </div>
      
      <List></List>
    </div>
  );
}

const list = [
  {
    description: "Clean kitchen",
    objectID: 0
  },
  {
    description: "Organize email inbox",
    objectID: 1
  },
  {
    description: "Do taxes",
    objectID: 2
  },
]
 
const List = () => 
  list.map(item => (
    <div key={item.objectID} className="item-list">
      <span>{item.description}</span>
    </div>
  ))


export default App;
