import React from "react";

const initialState = {};

class CategoryCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: {} };
    this.categoryName = React.createRef();
    this.attributeName = React.createRef();
    this.selectMenu = React.createRef();
    this.newAttributeValue = React.createRef();
  }

  onAddNewCategory = () => {
    if (this.categoryName.current.value !== "") {
      if (!Object.keys(this.state.category).length) {
        alert("Category attributes doesn't exist!");
        return;
      }
      this.props.onAddNewCategory({
        [this.categoryName.current.value]: this.state.category
      });

      this.categoryName.current.value = "";
      this.attributeName.current.value = "";

      if (this.selectMenu.current !== null) this.selectMenu.current.value = "";
      if (this.newAttributeValue.current !== null)
        this.newAttributeValue.current.value = "";

      this.setState({
        category: {}
      });
    } else {
      alert("Category name field is empty!");
      return;
    }
  };

  onAddNewAttribute = e => {
    if (this.attributeName.current.value !== "") {
      this.setState({
        category: { [this.attributeName.current.value]: [] }
      });
      this.attributeName.current.value = "";
    } else {
      alert("Add new attribute is empty");
      return;
    }
  };

  onAddNewAttributeValue = () => {
    if (this.selectMenu.current.value !== "") {
      const attributeValues = this.state.category[
        this.selectMenu.current.value
      ];
      attributeValues.push(this.newAttributeValue.current.value);
      this.setState({
        [this.selectMenu.current.value]: attributeValues
      });
      this.newAttributeValue.current.value = "";
    } else {
      alert("Add new attribute value is empty");
      return;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="categoryComponent">
          <p> Category </p>
          <input
            type="text"
            name="categoryName"
            placeholder="New category name"
            ref={this.categoryName}
          />
          <button onClick={this.onAddNewCategory}> Create new category </button>
          <hr />
          <input
            type="text"
            name="attributeName"
            placeholder="New attribute name"
            ref={this.attributeName}
          />
          <button onClick={this.onAddNewAttribute}>Add new attribute</button>
          <hr />
          {Object.keys(this.state.category).length ? (
            <React.Fragment>
              <select ref={this.selectMenu}>
                {Object.keys(this.state.category).map(key => {
                  return <option value={key}>{key}</option>;
                })}
              </select>
              <input
                type="text"
                name="attributeValue"
                placeholder="New attribute value"
                ref={this.newAttributeValue}
              />
              <button onClick={this.onAddNewAttributeValue}>
                Add new attribute value
              </button>
              <hr />
            </React.Fragment>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default CategoryCreation;
