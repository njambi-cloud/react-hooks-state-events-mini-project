import React, {useState} from "react";

function CategoryFilter({categories, onFilter}) {

  const [selected, setSelected] = useState(0)

  const buttonCategory = categories.map((category,index)=> {
    return <button key={category} className={selected===index? "selected": ""} onClick={()=>{onFilter(category)
    setSelected(index)}}>{category}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonCategory}
    </div>
  );
}

export default CategoryFilter;
