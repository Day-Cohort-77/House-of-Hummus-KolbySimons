const transientState = {
  entreeId: 0,
  vegetableId: 0,
  sideId: 0,
};

export const setSelectedEntree = (entree) => {
  transientState.entreeId = parseInt(entree);
};

export const setSelectedVeggie = (veggie) => {
  transientState.vegetableId = parseInt(veggie);
};

export const setSelectedSide = (side) => {
  transientState.sideId = parseInt(side);
};

export const addToPurchases = async () => {
  const purchased = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };
  const response = await fetch("http://localhost:8088/purchases", purchased);
  const newPurchaseEvent = new CustomEvent("newPurchase");
  document.dispatchEvent(newPurchaseEvent);
};
