import React, { useEffect, useState, useMemo, memo } from "react";
import "./Table.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharactersRequest } from "../../store/slices/starwarSlice";
import { RootState } from "../../store/store";
import { listIcon1, listIcon2, filmsImage } from "../../assets";
import DropdownMenu from "./DropdownMenu";
import ViewToggleButton from "./ViewToggleButton";
import SortDropdown from "./SortDropdown";
import { useSearch } from "../../context/SearchContext";

const Table: React.FC = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state: RootState) => state.starwar.characters);
  const loading = useSelector((state: RootState) => state.starwar.loading);
  const error = useSelector((state: RootState) => state.starwar.error);
  
  const { searchQuery } = useSearch(); 

  const [dropdownOpen, setDropdownOpen] = useState<Record<number, boolean>>({});
  const [view, setView] = useState<"list" | "grid">("list");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    if (characters.length === 0) {
      dispatch(fetchCharactersRequest());
    }
  }, [dispatch, characters.length]);

  const processedUsers = useMemo(() => {
    return characters
      .filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase())) 
      .sort((a, b) => (sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
  }, [characters, searchQuery, sortOrder]); 

  const toggleDropdown = (userId: number) => {
    setDropdownOpen((prev) => ({ ...prev, [userId]: !prev[userId] }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return (
    <div>
      <p>Error: {error}</p>
      <button onClick={() => dispatch(fetchCharactersRequest())}>Retry</button>
    </div>
  );

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-heading">Users</div>

        <div className="header-controls">
          <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
          <ViewToggleButton view={view} setView={setView} />
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
            <div key={user.id} className="grid-item">
              <div className="white-box"></div>
              <div className="movie-info">
                <div className="movie-name-container">
                  <img src={filmsImage} alt="Movie Thumbnail" className="movie-image" />
                  <span className="movie-name">{user.name}</span>
                </div>
                <DropdownMenu userId={user.id} isOpen={dropdownOpen[user.id]} toggle={() => toggleDropdown(user.id)} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Table);
