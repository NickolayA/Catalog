import React from "react";

class CategoryShowing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstUpdate: 0 };
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

  onSubmit = e => {
    e.preventDefault();
    for (const field in this.refs) {
      console.log(this.refs[field].value);
    }
    console.log(this.categorySelect.current.value);
  };

  render() {
    return (
      <React.Fragment>
        <p>Categories Showing</p>
        <form onSubmit={this.onSubmit}>
          {Object.keys(this.props.categories).length ? (
            <select
              ref={this.categorySelect}
              onChange={this.onSelectCategoryChange}
            >
              {Object.keys(this.props.categories).map(key => {
                return (
                  <option value={key} key={key}>
                    {key}
                  </option>
                );
              })}
            </select>
          ) : null}

          {this.state.selectedCategory ? (
            <React.Fragment>
              {Object.keys(this.props.categories[this.state.selectedCategory])
                .length ? (
                <React.Fragment>
                  {Object.keys(
                    this.props.categories[this.state.selectedCategory]
                  ).map(key => {
                    return (
                      <React.Fragment>
                        {this.props.categories[this.state.selectedCategory][key]
                          .length ? (
                          <React.Fragment>
                            <h1>{key}</h1>
                            <select
                              ref={key}
                              onChange={this.onSelectAttributeProperty}
                            >
                              {this.props.categories[
                                this.state.selectedCategory
                              ][key].map(val => {
                                return <option value={val}>{val}</option>;
                              })}
                            </select>
                          </React.Fragment>
                        ) : null}
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              ) : null}
            </React.Fragment>
          ) : null}
          <button>Click</button>
        </form>
      </React.Fragment>
    );
  }
}

export default CategoryShowing;
