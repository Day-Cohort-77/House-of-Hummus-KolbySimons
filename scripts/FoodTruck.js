import { Sales } from "./Sales.js";
import { EntreeOptions } from "./Entrees.js";
import { Veggies } from "./Vegetables.js";
import { Sides } from "./SideDishes.js";
import { addToPurchases } from "./TransientState.js";

export const FoodTruck = async () => {
  const salesHTML = await Sales();
  const entreeHTML = await EntreeOptions();
  const vegetableHTML = await Veggies();
  const sideHTML = await Sides();
  return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <article>
        <h2>Entrees</h2>
        ${entreeHTML}
        </article>

         <article>
        <h2>Vegetables</h2>
        ${vegetableHTML}
        </article>

         <article>
        <h2>Sides</h2>
        ${sideHTML}
        </article>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `;
};

const handlePurchase = (clickEvent) => {
  if (clickEvent.target.id === "purchase") {
    addToPurchases();
  }
};

document.addEventListener("click", handlePurchase);
