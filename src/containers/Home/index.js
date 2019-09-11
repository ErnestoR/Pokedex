import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemonList } from "modules/pokemon";
import Home from "pages/Home";

const HomeContainer = ({ ...props }) => {
  const { list, loading } = useSelector(state => state.pokemon);
  const dispatch = useDispatch();
  const loadList = useCallback(() => dispatch(fetchPokemonList()), [dispatch]);

  useEffect(() => {
    if (list.length === 0) {
      loadList();
    }
  }, [loadList, list]);

  return <Home list={list} loading={loading} {...props} />;
};

export default HomeContainer;
