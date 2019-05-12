import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    query: "",
    results: []
  };

  render() {
    const handleInputChange = () => {
      let newList = [];
      this.setState(
        {
          query: this.search.value
        },
        () => {
          if (this.state.query !== "") {
            newList = this.props.origPies
              .filter(value => {
                if (value == null || value.isPieOfTheDay !== true) {
                  return false;
                }
                return true;
              })
              .map(item => {
                return [
                  item.displayName,
                  item.priceString,
                  item.quantity,
                  this.props.stores.map(store => {
                    if (this.props.match(item, store)) {
                      return store.displayName;
                    }
                    return console.log("Store name retrieved (Search)");
                  }),
                  this.props.stores.map(store => {
                    if (this.props.match(item, store)) {
                      return store.address;
                    }
                    return console.log("Address retrieved (Search)");
                  }),
                  this.props.stores.map(store => {
                    if (this.props.match(item, store)) {
                      return store.rating;
                    }
                    return console.log("Rating retrieved (Search)");
                  }),
                  this.props.stores.map(store => {
                    if (this.props.match(item, store)) {
                      return store.mobile;
                    }
                    return console.log("Number retrieved (Search)");
                  })
                ];
              });

            newList = newList.filter(item => {
              const lc = item[0].toString().toLowerCase() + " pie";
              const filter = this.state.query.toLowerCase();
              return lc.includes(filter);
            });
          }

          this.setState({
            results: newList,
            query: this.search.value
          });
          return this.props.addSomething(this.state.results, this.state.query);
        }
      );
    };

    return (
      <form>
        <input
          type="search"
          placeholder="Enter a pie"
          ref={input => (this.search = input)}
          onChange={handleInputChange}
        />
        <i className="fa fa-search" />
      </form>
    );
  }
}
export default SearchBar;
