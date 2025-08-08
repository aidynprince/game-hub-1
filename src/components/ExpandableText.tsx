import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MdTexture } from "react-icons/md";

interface ExpandableTextProps {
    children: string;
}

const ExpandableText = ({ children }: ExpandableTextProps) => {
    const [expanded, setExpanded] = useState(false);
    const limit = 300;
    const summary = children.substring(0, limit) + "...";

    if (children.length <= limit) {
        return (
            <>
                <Text>{children}</Text>
            </>
        );
    }

    return (
        <Text>
            {expanded ? children : summary + "..."} {"  "}
            <Button
                onClick={() => setExpanded(!expanded)}
                color="white"
                colorScheme={expanded ? "red" : "blue"}
                fontWeight={"bold"}
            >
                {expanded ? "Show Less" : "Read More"}
            </Button>{" "}
        </Text>
    );
};

export default ExpandableText;
