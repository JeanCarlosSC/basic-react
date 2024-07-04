import "./App.css";

function Header() {
  return (
    <header>
      <h1>JeanK's kitchen</h1>
    </header>
  );
}

function Main() {
  return <p>We serve the most delicious food around.</p>;
}

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
