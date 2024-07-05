import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <>
      <p>We serve the most delicious food around.</p>
      <ul>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
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

const dishObjects = dishes.map((dish, i) => ({
  id: i,
  title: dish,
}));

function App() {
  return (
    <>
      <Header name="Cindy" />
      <Main dishes={dishObjects} />
      <Footer year={2024} />
    </>
  );
}

export default App;
