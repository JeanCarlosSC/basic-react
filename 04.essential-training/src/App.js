import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s kitchen</h1>
    </header>
  );
}

function Main() {
  return (
    <>
      <p>We serve the most delicious food around.</p>
      <ul>
        {dishes.map((dish) => (
          <li>{dish}</li>
        ))}
      </ul>
    </>
  );
}

function Footer(props) {
  return <footer>Copyright {props.year}</footer>;
}

const dishes = [
  "Black Bean Soup",
  "Macaroni and Cheese",
  "Salmon and Potatoes",
];

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
