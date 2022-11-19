import React from "react";
import axios from "axios";

const hoc = (ReactComponent) => {
  class NewReactComponent extends React.Component {
    res;
    newData;
    constructor() {
      super();
      this.state = {
        data: [],
        userData: [],
      };
    }
    filterData = (value) => {
      if (value === "male") {
        this.newData = this.state.userData.filter(function (ele) {
          return ele.gender === "male";
        });
        this.setState({
          data: this.newData,
        });
      } else if (value === "female") {
        this.newData = this.state.userData.filter(function (ele) {
          return ele.gender === "female";
        });
        this.setState({
          data: this.newData,
        });
      } else {
        this.setState({
          data: this.state.userData,
        });
      }
    };
    componentDidMount() {
      this.getDataFromServer();
    }
    getDataFromServer = async () => {
      this.res = await axios.get("https://randomuser.me/api/?results=10");
      console.log(this.res.data.results);
      this.setState({
        data: this.res.data.results,
        userData: this.res.data.results,
      });
    };
    render() {
      return <ReactComponent state={this.state} filterData={this.filterData} />;
    }
  }

  return NewReactComponent;
};

export default hoc;
