import { setSelectedSide } from "./TransientState.js";

export const Sides = async () => {
  const response = await fetch("http://localhost:8088/sides");
  const sides = await response.json();

  const html = `
<ul>
      ${sides
        .map(
          (side) =>
            `<li>
              <input type="radio" name="sides" id="${side.id}" value="${side.price}">
              ${side.title} || $${side.price}
            </li>`
        )
        .join("")}
    </ul>`;

  return html;
};

const handleSideSelection = (side) => {
  if (side.target.name === "sides") {
    setSelectedSide(side.target.id);
  }
};
document.addEventListener("change", handleSideSelection);
