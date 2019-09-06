export function getFlavorTextEntreeByLanguage(species, language) {
  return species.flavor_text_entries.find(
    entree => entree.language.name === language
  );
}

export function getEvolvesToFromChainByName(chain, name) {
  // no evolution
  if (!chain.evolves_to) {
    return [];
  }

  // 1st level
  if (chain.species.name === name) {
    return chain.evolves_to;
  }

  // 2nd level
  const secondLevel = chain.evolves_to[0];
  if (secondLevel.species.name === name) {
    return secondLevel.evolves_to;
  }

  // 3rd level will always be empty
  return [];
}
