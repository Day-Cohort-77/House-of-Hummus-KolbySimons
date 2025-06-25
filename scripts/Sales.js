export const Sales = async () => {
  const response = await fetch(
    "http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side"
  );
  const sales = await response.json();
  let salesDivs = sales.map((sale) => {
    const salePrice =
      sale.entree.price + sale.vegetable.price + sale.side.price;

    return `<div>${sale.id} - $${salePrice.toFixed(2)}</div>`;
  });

  salesDivs = salesDivs.join("");

  return salesDivs;
};
