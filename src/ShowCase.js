import React from "react";

const ShowCase = props => {
  return (
    <div>
      <React.Fragment>
        {props.goods.length ? <div>Yes</div> : null}
      </React.Fragment>
    </div>
  );
};

export default ShowCase;
