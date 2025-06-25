import { setSelectedVeggie } from "./TransientState.js";

export const Veggies = async () => {
  const response = await fetch("http://localhost:8088/vegetables");
  const veggies = await response.json();

  const html = `
<ul>
      ${veggies
        .map(
          (veg) =>
            `<li>
              <input type="radio" name="veggies" id="${veg.id}" value="${veg.price}">
             ${veg.type} || $${veg.price}
            </li>`
        )
        .join("")}
    </ul>`;

  return html;
};

const handleVegSelection = (veggie) => {
  if (veggie.target.name === "veggies") {
    setSelectedVeggie(veggie.target.id);
  }
};
document.addEventListener("change", handleVegSelection);
