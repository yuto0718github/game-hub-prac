import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface GameCardProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardProps) => {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
