import React from "react";

const ShowCase = props => {
  return (
    <div>
      <React.Fragment>
        {props.goods.length ? (
          <div>
            {props.goods.map((good, index) => {
              const categoryName = Object.keys(good.category)[0];

              const attributes = [];
              for (let key in good.category[categoryName]) {
                attributes.push(
                  <p>
                    {key}: {good.category[categoryName][key]}
                  </p>
                );
              }

              const categoryNameContainer = <h2>Category: {categoryName}</h2>,
                goodName = <h1>Good name: {good.goodName}</h1>,
                dateCreation = <p>Creation date: {good.dateCreation}</p>;

              return (
                <React.Fragment>
                  {categoryNameContainer}
                  {goodName}
                  {dateCreation}
                  Attributes:
                  {attributes}
                </React.Fragment>
              );
            })}
          </div>
        ) : null}
      </React.Fragment>
    </div>
  );
};

export default ShowCase;
