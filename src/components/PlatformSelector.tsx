import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store/GameQueryStore";

const PlatformSelector = () => {
    const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
    const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
    const { data, error } = usePlatforms();

    const platformArray = data?.results.find(
        (g: Platform) => g.id === platformId
    );
    const platformName = platformArray?.name;

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {platformName || "Platforms"}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform: Platform) => (
                    <MenuItem
                        onClick={() => setPlatformId(platform.id)}
                        key={platform.id}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
