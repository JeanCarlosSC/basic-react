import './App.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

function MyButton() {
  return (
    <button>I'm a button</button>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to my app!</h1>
      <img
        src={user.imageUrl}
        alt={'Photo of:' + user.name} 
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <p>{user.name}</p>
      
      <MyButton />
    </div>
  );
}

export default App;
