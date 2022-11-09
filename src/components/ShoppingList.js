import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items,onItemFormSubmit, newItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ searchBar, setSearchBar] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchBar(e) {
    setSearchBar(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && item.name.toLowerCase().includes(searchBar.toLowerCase())) return true;

    return item.category === selectedCategory && item.name.toLowerCase().includes(searchBar.toLowerCase())
  });

  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit = {onItemFormSubmit} newItem = {newItem}/>
      <Filter search = {searchBar} onSearchChange= {handleSearchBar} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
