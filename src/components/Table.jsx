import React from "react";
import "./Table.css";
import { listIcon1, listIcon2, filmsImage } from ".";
const Table = () => {
  const movies = [
    { name: "Movie Name", director: "Lorem", releaseDate: "Lorem" },
    { name: "Movie Name", director: "Lorem", releaseDate: "Lorem" },
    { name: "Movie Name", director: "Lorem", releaseDate: "Lorem" },
    { name: "Movie Name", director: "Lorem", releaseDate: "Lorem" },
    { name: "Movie Name", director: "Lorem", releaseDate: "Lorem" },
    { name: "Movie Name", director: "Lorem", releaseDate: "Lorem" },
  ];

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-heading">Films</div>
        <div className="toggle-button">
          <button className="list-toggle">
            <img src={listIcon1} alt="List Icon 1" className="toggle-icon" />
            <img src={listIcon2} alt="List Icon 2" className="toggle-icon" />
            <span className="list-text">List</span>
          </button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Director</th>
            <th>Release Date</th>
            <th className="colon-header"></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>
                {" "}
                <img
                  src={filmsImage}
                  alt="Film Reel"
                  className="film-reel-icon"
                />
                {movie.name}
              </td>
              <td>{movie.director}</td>
              <td>{movie.releaseDate}</td>
              <td className="colon-cell">:</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
