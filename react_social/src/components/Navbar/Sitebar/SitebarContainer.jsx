import React from "react";
import { connect } from "react-redux";
import Sitebar from "./Sitebar";

const mapStateToProps = (state) => {
  return {
    friends: state.sitebar.friends,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const SitebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sitebar);

export default SitebarContainer;
