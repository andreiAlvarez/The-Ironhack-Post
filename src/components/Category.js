import React from "react";
import { useParams } from "react-router-dom";
import NewsArticle from "./NewsArticle";

export default function Category(props) {
  console.log(props);
  let { categ, term } = useParams();
  const data = require("../data.json");
  console.log(categ);

  const dataFilter = () => data.filter((item) => item.category === categ);
  console.log(dataFilter());
  const dataFiltered = dataFilter();

  const renderTerm = () => {
    let label = "";

    if (categ) {
      label = `Category ${categ}`;
    }

    if (term) {
      label = `Search by ${term}`;
    }

    return label;
  };

  return (
    <div>
      <h2 className="category-upper">{renderTerm()}:</h2>
      <div className="all__news">
        {dataFilter
          ? dataFiltered.map((item) => (
              <NewsArticle
                data={item}
                key={item.url}
                {...props}
                setSelectedNews={data}
              />
            ))
          : "Loading"}
        <hr className="cover-lines"></hr>
      </div>
    </div>
  );
}
