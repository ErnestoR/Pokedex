import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPokemonList } from "modules/pokemon";
import Home from "pages/Home";

const mapStateToProps = state => ({
  list: state.pokemon.list
});
const mapDispathToProps = dispatch => {
  return {
    loadList: () => dispatch(fetchPokemonList())
  };
};

const HomeContainer = ({ loadList, list, ...props }) => {
  useEffect(() => {
    if (list.length === 0) {
      loadList();
    }
  }, [loadList, list]);

  return <Home list={list} {...props} />;
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(HomeContainer);
