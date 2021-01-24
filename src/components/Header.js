import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function Header() {
  const [search, setSearch] = useState("");
  let dateCreate = moment().format("ddd, MMMM DD, YYYY");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    window.location.href = `/search/${search}`;
    event.preventDefault();
  };

  return (
    <section className="header">
        <Link to="/" className="logo">
          <h1 className="newspaper-head">The Ironhack Post</h1>
        </Link>
       <p className="date">{dateCreate}</p>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="search-input"
            placeholder="   Search:"
            name="search"
            onChange={handleChange}
          />
        </form>
    </section>
  );
}