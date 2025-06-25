import { setSelectedEntree } from "./TransientState.js";

export const EntreeOptions = async () => {
  const response = await fetch(`http://localhost:8088/entrees`);
  const entrees = await response.json();

  const entreeHTML = `
    <ul>
      ${entrees
        .map(
          (entree) =>
            `<li>
              <input type="radio" name="entrees" id="${entree.id}" value="${entree.price}">
              ${entree.name} || $${entree.price}
            </li>`
        )
        .join("")}
    </ul>`;
  return entreeHTML;
};

const handleEntreeSelection = (entree) => {
  if (entree.target.name === "entrees") {
    setSelectedEntree(entree.target.id);
  }
};
document.addEventListener("change", handleEntreeSelection);
