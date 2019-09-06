import {
  getEvolvesToFromChainByName,
  getFlavorTextEntreeByLanguage
} from "./index";

describe("getEvolvesToFromChainByName", () => {
  const chain = {
    species: {
      name: "charmander"
    },
    evolves_to: [
      {
        species: {
          name: "charmeleon"
        },
        evolves_to: [
          {
            species: {
              name: "charizard"
            },
            evolves_to: []
          }
        ]
      }
    ]
  };
  it("should return empty array when an empty chain is provided", () => {
    const result = getEvolvesToFromChainByName({}, "");

    expect(result).toStrictEqual([]);
  });

  it("should correctly return second evolution", () => {
    const results = getEvolvesToFromChainByName(chain, "charmander");

    expect(results[0].species.name).toBe("charmeleon");
  });

  it("should correctly return third evolution", () => {
    const results = getEvolvesToFromChainByName(chain, "charmeleon");

    expect(results[0].species.name).toBe("charizard");
  });

  describe(" multi evolution chain", () => {
    const multiChain = {
      species: { name: "eevee" },
      evolves_to: [
        {
          species: { name: "leafeon" },
          evolves_to: []
        },
        {
          species: { name: "glaceon" },
          evolves_to: []
        },
        {
          species: { name: "espeon" },
          evolves_to: []
        },
        {
          species: { name: "umbreon" },
          evolves_to: []
        },
        {
          species: { name: "vaporeon" },
          evolves_to: []
        },
        {
          species: { name: "jolteon" },
          evolves_to: []
        },
        {
          species: { name: "flareon" },
          evolves_to: []
        }
      ]
    };

    it("should return correct length", () => {
      const results = getEvolvesToFromChainByName(multiChain, "eevee");

      expect(results.length).toBe(7);
    });

    it("should return correct pokemon for end chain", () => {
      const results = getEvolvesToFromChainByName(multiChain, "vaporeon");

      expect(results.length).toBe(0);
    });
  });
});

describe("getFlavorTextEntreeByLanguage", () => {
  const species = {
    flavor_text_entries: [
      {
        flavor_text:
          "The question of why only Eevee has such\nunstable genes has still not been solved.",
        language: { name: "en" }
      },
      {
        flavor_text:
          "Todavía no se ha esclarecido el motivo por el\nque es el único Pokémon que presenta un\ncódigo genético inestable.",
        language: { name: "es" }
      }
    ]
  };

  it("correctly returns english", () => {
    const text = getFlavorTextEntreeByLanguage(species, "en");

    expect(text.flavor_text).toBe(
      "The question of why only Eevee has such\nunstable genes has still not been solved."
    );
    expect(text.language.name).toBe("en");
  });

  it("correctly returns spanish", () => {
    const text = getFlavorTextEntreeByLanguage(species, "es");

    expect(text.flavor_text).toBe(
      "Todavía no se ha esclarecido el motivo por el\nque es el único Pokémon que presenta un\ncódigo genético inestable."
    );
    expect(text.language.name).toBe("es");
  });
});
