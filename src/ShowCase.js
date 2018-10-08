import React from "react";

const ShowCase = props => {
  return (
    <aside className="menu">
      <React.Fragment>
        {props.goods.length ? (
          <div>
            <p className="menu-label">Goods</p>
            {props.goods.map((good, index) => {
              const categoryName = Object.keys(good.category)[0];
              const attributes = [];

              for (let key in good.category[categoryName]) {
                attributes.push(
                  <li key={key + "category"}>
                    <a>
                      {key}: {good.category[categoryName][key]}
                    </a>
                  </li>
                );
              }

              const categoryNameContainer = (
                  <li>
                    <a>
                      <span className="has-text-success">Category:</span>{" "}
                      {categoryName}
                    </a>
                  </li>
                ),
                goodName = (
                  <li>
                    <a>Good name: {good.goodName}</a>
                  </li>
                ),
                dateCreation = (
                  <li>
                    <a>Creation date: {good.dateCreation}</a>
                  </li>
                );

              return (
                <React.Fragment key={good.goodName + good.dateCreation}>
                  <ul className="menu-list">
                    {categoryNameContainer}
                    {goodName}
                    {dateCreation}
                    <li>Attributes:</li>
                    <li>
                      <ul>{attributes}</ul>
                    </li>
                  </ul>
                  <hr />
                </React.Fragment>
              );
            })}
          </div>
        ) : (
          <p className="menu-label">Goods not exist</p>
        )}
      </React.Fragment>
    </aside>
  );
};

export default ShowCase;
