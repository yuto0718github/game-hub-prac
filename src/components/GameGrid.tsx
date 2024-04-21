import { Text } from "chakra-ui/react";
import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "./Gamecard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <text>{error}</text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing="10"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
        {error && <p>{error}</p>}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
