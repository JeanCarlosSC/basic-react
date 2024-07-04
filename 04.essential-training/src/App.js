import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s kitchen</h1>
    </header>
  );
}

function Main() {
  return <p>We serve the most delicious food around.</p>;
}

function Footer(props) {
  return <footer>Copyright {props.year}</footer>;
}

function App() {
  return (
    <>
      <Header name="Cindy" />
      <Main />
      <Footer year={2024} />
    </>
  );
}

export default App;
