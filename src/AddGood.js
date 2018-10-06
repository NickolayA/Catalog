import React from "react";

class Good extends React.Component {
  constructor(props) {
    super(props);
    this.goodName = React.createRef();
    this.dateCreation = React.createRef();
    this.state = {
      firstUpdate: 0
    };
    this.categorySelect = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.firstUpdate) {
      this.onSelectCategoryChange();
      this.setState({
        firstUpdate: 1
      });
    }
  }

  onSelectCategoryChange = () => {
    this.setState({
      selectedCategory: this.categorySelect.current.value
    });
  };

  onAddNewGood = e => {
    e.preventDefault();

    if (this.categorySelect.current === null) {
      alert("Category is not selected!!");
      return;
    }

    const newGood = {
      goodName: this.goodName.current.value,
      dateCreation: this.dateCreation.current.valueAsDate
        .toISOString()
        .substr(0, 10),
      [this.categorySelect.current.value]: {}
    };

    for (let i in this.refs) {
      newGood[this.categorySelect.current.value][this.refs[i].name] = this.refs[
        i
      ].value;
    }

    this.props.onAddNewGood(newGood);
    this.goodName.current.value = "";
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onAddNewGood}>
          <p> Good </p>{" "}
          <input type="text" name="goodName" ref={this.goodName} required />
          <input
            type="date"
            name="dateCreation"
            ref={this.dateCreation}
            required
          />
          <hr />
          {Object.keys(this.props.categories).length ? (
            <React.Fragment>
              <p> Categories </p>{" "}
              <select
                ref={this.categorySelect}
                onChange={this.onSelectCategoryChange}
              >
                {" "}
                {Object.keys(this.props.categories).map(key => {
                  return (
                    <option value={key} key={key}>
                      {" "}
                      {key}{" "}
                    </option>
                  );
                })}{" "}
              </select>{" "}
            </React.Fragment>
          ) : null}{" "}
          {this.state.selectedCategory ? (
            <React.Fragment>
              {" "}
              {Object.keys(this.props.categories[this.state.selectedCategory])
                .length ? (
                <React.Fragment>
                  {" "}
                  {Object.keys(
                    this.props.categories[this.state.selectedCategory]
                  ).map(key => {
                    return (
                      <React.Fragment>
                        {" "}
                        {this.props.categories[this.state.selectedCategory][key]
                          .length ? (
                          <React.Fragment>
                            <p> Attribute: {key} </p>{" "}
                            <select ref={key} name={key}>
                              {" "}
                              {this.props.categories[
                                this.state.selectedCategory
                              ][key].map(val => {
                                return <option value={val}> {val} </option>;
                              })}{" "}
                            </select>{" "}
                          </React.Fragment>
                        ) : null}{" "}
                      </React.Fragment>
                    );
                  })}{" "}
                </React.Fragment>
              ) : null}{" "}
            </React.Fragment>
          ) : null}{" "}
          <hr />
          <button> Add new good </button>{" "}
        </form>{" "}
      </React.Fragment>
    );
  }
}

export default Good;
