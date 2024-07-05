import "./App.css";

// destructuring
function Header({ name }) {
  return (
    <header>
      <h1>{name}'s kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <img
        width={300}
        src="./restaurant.jpg"
        alt="A server presents two plates at a fancy restaurant."
      ></img>
      <p>We serve the most delicious food around.</p>
      <ul>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
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
      <Footer year={new Date().getFullYear()} />
    </>
  );
}

// Destructuring arrays
const [firstCity, secondCity] = ["Tokyo", "Bend"];

console.log(firstCity, secondCity);

export default App;
