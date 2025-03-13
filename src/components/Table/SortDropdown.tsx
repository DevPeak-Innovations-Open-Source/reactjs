import React, { useState } from "react";

interface SortDropdownProps {
  sortOrder: "asc" | "desc";
  setSortOrder: (order: "asc" | "desc") => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ sortOrder, setSortOrder }) => {
  const [open, setOpen] = useState(false);

  const handleSortSelection = (order: "asc" | "desc") => {
    setSortOrder(order);
    setOpen(false); 
  };

  return (
    <div className="sort-container">
      <button className="sort-button" onClick={() => setOpen((prev) => !prev)}>
        Sort 
      </button>

      {open && (
        <div className="sort-dropdown">
          <button onClick={() => handleSortSelection("asc")}>Ascending</button>
          <button onClick={() => handleSortSelection("desc")}>Descending</button>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
