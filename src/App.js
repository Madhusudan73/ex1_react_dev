import "./styles.css";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90
};

export default function App() {
  return (
    <div className="MyStyle">
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      <Profile />
      <ShoppingList />
    </div>
  );
}

function MyButton() {
  return <button>Click Me</button>;
}
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p className="avatar">
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  );
}

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 }
];
function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen"
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
