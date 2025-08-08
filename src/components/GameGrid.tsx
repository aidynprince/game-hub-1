import { SimpleGrid } from "@chakra-ui/react";
import useGameQueryStore from "../store/GameQueryStore";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
    const gameQuery = useGameQueryStore((s) => s.gameQuery);
    const { data, error, isLoading, hasNextPage, fetchNextPage } =
        useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <p>{error.message}</p>;

    return (
        <>
            {" "}
            <InfiniteScroll
                dataLength={data ? data.pages.length : 0} //This is important field to render the next data
                next={() => fetchNextPage()}
                hasMore={hasNextPage}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <SimpleGrid
                    columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                    padding="10px"
                    spacing={6}
                >
                    {isLoading &&
                        skeletons.map((skeleton) => (
                            <GameCardContainer key={skeleton}>
                                <GameCardSkeleton />
                            </GameCardContainer>
                        ))}
                    {data?.pages.map((group, i) => (
                        <React.Fragment key={i}>
                            {group.results.map((game) => (
                                <GameCardContainer key={game.id}>
                                    <GameCard game={game} />
                                </GameCardContainer>
                            ))}
                        </React.Fragment>
                    ))}
                </SimpleGrid>
            </InfiniteScroll>
        </>
    );
};

export default GameGrid;
