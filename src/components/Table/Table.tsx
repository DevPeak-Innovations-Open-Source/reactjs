import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
  memo,
} from "react";
import "./Table.css";
import {
  listIcon1,
  listIcon2,
  filmsImage,
  menuButton,
  vector,
  frame,
  frame1,
  frame2,
  vector1,
  lockSimple,
  frame3,
} from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharactersRequest } from "../../store/slices/starwarSlice";
import { RootState } from "../../store/store";

interface TableProps {
  searchQuery: string;
}
interface User {
  id: number;
  name: string;
  address: string;
}

const DropdownMenu: React.FC<{
  userId: number;
  isOpen: boolean;
  toggle: () => void;
}> = ({ userId, isOpen, toggle }) => {
  const dropdownItems = [
    { icon: vector, title: "View" },
    { icon: frame, title: "Download" },
    { icon: frame1, title: "Rename" },
    { icon: frame2, title: "Share Link" },
    { icon: vector1, title: "Move" },
    { icon: lockSimple, title: "Mark Private" },
    { icon: frame3, title: "Delete", className: "delete" },
  ];

  return (
    <div className="menu-wrapper">
      <img
        src={menuButton}
        alt="Menu Button"
        className="menu-icon"
        onClick={toggle}
        aria-expanded={isOpen ? "true" : "false"}
        role="button"
      />
      {isOpen && (
        <div className="dropdown-menu">
          {dropdownItems.map((item, i) => (
            <div key={i} className={`dropdown-item ${item.className || ""}`}>
              <img src={item.icon} alt={item.title} className="dropdown-icon" />
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Table: React.FC<TableProps> = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const characters = useSelector(
    (state: RootState) => state.starwar.characters
  );
  const loading = useSelector((state: RootState) => state.starwar.loading);
  const error = useSelector((state: RootState) => state.starwar.error);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<Record<number, boolean>>({});
  const [view, setView] = useState<"list" | "grid">("list");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortDropdownOpen, setSortDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    if (characters.length === 0) {
      dispatch(fetchCharactersRequest());
    }
  }, [dispatch, characters.length]);

  const toggleDropdown = useCallback((index: number) => {
    setDropdownOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  }, []);

  const processedUsers = useMemo(() => {
    return [...characters]
      .filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) =>
        sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
  }, [characters, searchQuery, sortOrder]);

  const handleSort = (order: "asc" | "desc") => {
    setSortOrder(order);
    setSortDropdownOpen(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={() => dispatch(fetchCharactersRequest())}>
          Retry
        </button>
      </div>
    );

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-heading">Users</div>

        <div className="header-controls">
          <div className="sort-container">
            <button
              className="sort-button"
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              aria-expanded={sortDropdownOpen}
            >
              Sort
            </button>
            {sortDropdownOpen && (
              <div className="sort-dropdown">
                <button onClick={() => handleSort("asc")}>Ascending</button>
                <button onClick={() => handleSort("desc")}>Descending</button>
              </div>
            )}
          </div>

          <div
            className="toggle-button"
            onClick={() => setView(view === "list" ? "grid" : "list")}
          >
            {view === "list" ? (
              <>
                <img src={listIcon2} alt="List Icon" className="toggle-icon" />
                <span className="list-text">List</span>
                <img
                  src={listIcon1}
                  alt="Grid Icon"
                  className="toggle-icon secondary-icon"
                />
              </>
            ) : (
              <>
                <img src={listIcon1} alt="Grid Icon" className="toggle-icon" />
                <span className="list-text">Grid</span>
                <img
                  src={listIcon2}
                  alt="List Icon"
                  className="toggle-icon secondary-icon"
                />
              </>
            )}
          </div>
        </div>
      </div>

      {view === "list" ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {processedUsers.length > 0 ? (
              processedUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.address}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2}>No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        <div className="grid-container">
          {processedUsers.map((user) => (
            <div key={user.id}>
              <div className="white-box"></div>
              <div className="grid-item">
                <div className="movie-info">
                  <div className="movie-name-container">
                    <img
                      src={filmsImage}
                      alt="Movie Thumbnail"
                      className="movie-image"
                    />
                    <span className="movie-name">{user.name}</span>
                  </div>
                  <DropdownMenu
                    userId={user.id}
                    isOpen={dropdownOpen[user.id]}
                    toggle={() => toggleDropdown(user.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Table);
