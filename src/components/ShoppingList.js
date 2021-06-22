import { plantList } from "../datas/plantList";

function ShoppingList() {
  return (
    <ul>
      {plantList.forEach((plant) => (
        <li key={plant.id}>
          {plant.category}
          {plant.name}
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;
