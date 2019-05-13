import React, { Component } from "react";
import axios from "axios";
import Pie from "../../components/Pie/Pie";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";

const API_URL = "https://pie.now.sh/";

class Pies extends Component {
  state = {
    pies: [],
    stores: [],
    current_page: "1",
    disp_class: "displayOne",
    query: "",
    results: []
  };

  componentDidMount() {
    // RETRIEVING INFO FROM API //////////////////////////////////////////////////////////////////////////////
    Promise.all([
      axios.get(`${API_URL}pies`),
      axios.get(`${API_URL}stores`)
    ]).then(([pieResponse, storeResponse]) => {
      let pies = pieResponse.data;
      const stores = storeResponse.data;

      this.setState({ pies: pies, stores: stores, results: this.props.items });
      return console.log("Data retrieved");
    });
  }

  render() {
    // RETRIEVING VALUES FROM SEARCHBAR COMPONENT ////////////////////////////////////////////////////////////
    const addSomething = (stateValueFromChild, queryinput) => {
      if (queryinput.length === 0) {
        this.setState({
          results: [],
          query: queryinput
        });
      } else {
        this.setState({
          results: stateValueFromChild,
          query: queryinput
        });
      }
    };

    // MATCHING PIES W/ STORES ///////////////////////////////////////////////////////////////////////////////
    const matchPieStore = (pie, store) => {
      if (pie.storeId === store.id) {
        return true;
      } else {
        return false;
      }
    };

    // CREATING PIE LIST /////////////////////////////////////////////////////////////////////////////////////
    let pies = this.state.pies.map(pie => {
      if (pie.isPieOfTheDay === true) {
        return (
          <Pie
            key={pie.id + pie.storeId + pie.displayName}
            name={pie.displayName}
            price={pie.priceString}
            quantity={pie.quantity}
            storename={this.state.stores.map(store => {
              if (matchPieStore(pie, store)) {
                return store.displayName;
              } return console.log("Store name retrieved");
            })}
            address={this.state.stores.map(store => {
              if (matchPieStore(pie, store)) {
                return store.address;
              } return console.log("Address retrieved");
            })}
            rating={this.state.stores.map(store => {
              if (matchPieStore(pie, store)) {
                return store.rating;
              } return console.log("Rating retrieved");
            })}
            contact={this.state.stores.map(store => {
              if (matchPieStore(pie, store)) {
                return store.mobile;
              } return console.log("Number retrieved");
            })}
          />
        );
      }
      return console.log("Entries for initial pie list gathered");
    });

    let filteredPies = pies.filter(el => {
      return el != null;
    });
    console.log("Pie of the Day list finalised");

    // PAGINATING CONTENTS ///////////////////////////////////////////////////////////////////////////////////
    const paginateContents = e => {
      var dispClass = "";

      if (e.target.id === "1") {
        dispClass = "displayOne";
      }
      if (e.target.id === "2") {
        dispClass = "displayTwo";
      }
      this.setState({ disp_class: dispClass, current_page: e.target.id });
    };

    // DISPLAYING LIST ////////////////////////////////////////////////////////////////////////////////////////
    var displayPaginated;

    if (this.state.disp_class === "displayTwo") {
      displayPaginated = filteredPies.slice(5);
    } else {
      displayPaginated = filteredPies.slice(0, 5);
    }

    var searchResults = "";
    if (this.state.results) {
      searchResults = this.state.results.map(item => {
        return (
          <Search
            name={item[0]}
            price={item[1]}
            quantity={item[2]}
            storename={item[3]}
            address={item[4]}
            rating={item[5]}
            contact={item[6]}
          />
        );
      });
    }

    return (
      <div>
        <SearchBar
          match={matchPieStore}
          origPies={this.state.pies}
          stores={this.state.stores}
          filteredPies={filteredPies}
          addSomething={(stateValueFromChild, queryinput) =>
            addSomething(stateValueFromChild, queryinput)
          }
        />
        {searchResults.length === 0 ? displayPaginated : searchResults}
        <br />
        <br />
        {searchResults.length === 0 && (
          <Pagination
            onClick={paginateContents}
            classOne={this.state.current_page === "1" ? "active" : ""}
            classTwo={this.state.current_page === "2" ? "active" : ""}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default Pies;
