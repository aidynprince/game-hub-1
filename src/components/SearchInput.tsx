import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";
import useGameQueryStore from "../store/GameQueryStore";

const SearchInput = () => {
    const setSearchText = useGameQueryStore((s) => s.setSearchText);
    const ref = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) setSearchText(ref.current.value);
                navigate("/");
            }}
        >
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder="Search games..."
                    variant="filled"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
