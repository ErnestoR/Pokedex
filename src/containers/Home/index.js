import { connect } from "react-redux";

import { fetchPokemon } from "modules/pokemon";
import Home from "pages/Home";

// const mapStateToProps = () => {};
const mapDispathToProps = dispatch => {
  return {
    onSearchClick: () => dispatch(fetchPokemon())
  };
};

export default connect(
  null,
  mapDispathToProps
)(Home);
