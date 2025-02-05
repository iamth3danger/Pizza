import Topping from "./topping";

export default function ToppingHandler(){
    const imageMeat : string[] = ["toppings-pepperoni.webp", "toppings-sausage.webp","toppings-bacon.webp", "toppings-canadian-bacon.webp", "toppings-salami.webp", "toppings-meatballs.webp", "toppings-anchovies.webp", "toppings-beef.webp", "toppings-italian-sausage.webp", "toppings-grilled-chicken.webp"];
    const toppingsMeat : string[] = ["pepperoni", "sausage", "bacon", "canadian bacon", "salami", "meatballs", "anchovies", "beef", "italian sausage", "grilled chicken"];
    const imageVegtables : string[] = ["toppings-mushrooms.webp", "toppings-onions.webp", "toppings-black-olives.webp",  "toppings-pineapples.webp", "toppings-green-peppers.webp", "toppings-banana-peppers.webp", "toppings-roma-tomotoes.webp", "toppings-fresh-spinach.webp"];
    const toppingsVegtables : string[] = ["mushrooms", "onions", "olives",  "pineapple", "green peppers", "banana peppers", "roma tomatoes", "fresh spinach", ];
    const image : string[] = ["toppings-pepperoni.webp", "toppings-sausage.webp", "toppings-mushrooms.webp", "toppings-black-olives.webp", "toppings-onions.webp", "toppings-banana-peppers.webp", "toppings-pineapples.webp", "toppings-green-peppers.webp", "toppings-anchovies.webp"];
    const toppings : string[] = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "banana peppers", "pineapple", "peppers", "anchovies"];
    return (
        <div>
            {toppingsVegtables.map((item, index) => ( <Topping image={imageVegtables[index]} name={item} /> ))}
        </div>
    );
}