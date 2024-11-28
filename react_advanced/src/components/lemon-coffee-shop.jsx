
const coffeeShopItems = [
    {
      id: 1,
      title: "Espresso",
      description: "Rich and bold espresso, freshly brewed.",
      price: 2.5,
    },
    {
      id: 2,
      title: "Cappuccino",
      description: "A perfect balance of espresso, steamed milk, and foam.",
      price: 3.5,
    },
    {
      id: 3,
      title: "Latte",
      description: "Smooth espresso with steamed milk and a hint of foam.",
      price: 3.75,
    },
    {
      id: 4,
      title: "Mocha",
      description: "Espresso with rich chocolate syrup and steamed milk.",
      price: 4.0,
    },
    {
      id: 5,
      title: "Americano",
      description: "Espresso diluted with hot water for a milder flavor.",
      price: 2.75,
    },
    {
      id: 6,
      title: "Cheesecake Slice",
      description: "Creamy New York-style cheesecake with a graham cracker crust.",
      price: 4.5,
    },
    {
      id: 7,
      title: "Chocolate Brownie",
      description: "Decadent fudge brownie with a crispy crust and gooey center.",
      price: 3.0,
    },
    {
      id: 8,
      title: "Blueberry Muffin",
      description: "Freshly baked muffin packed with sweet blueberries.",
      price: 2.75,
    },
    {
      id: 9,
      title: "Croissant",
      description: "Buttery and flaky croissant, baked to perfection.",
      price: 3.25,
    },
    {
      id: 10,
      title: "Carrot Cake Slice",
      description: "Moist carrot cake with cream cheese frosting and a hint of cinnamon.",
      price: 4.25,
    },
  ];
  


const CoffeeShopMenu = () => {
  return(
    <div>
      <h2 className="text-pink-500 font-sans font-bold">Coffee Menu</h2>
     {coffeeShopItems.map( (item) => (
      <div key={item.id}>
        <h3>Content: { `${item.title} - ${item.description}`}</h3>
        <h3>Price: {item.price}</h3>
      </div>
     ))}
    </div>
  )
}
export default CoffeeShopMenu;  // export the component
