import { shipsLength, ShipType } from "react-battleships-engine";

//@ts-ignore
import Favicon from "@/assets/meta/favicon.svg";
//@ts-ignore
import OGImage from "@/assets/meta/og-image.png";

export const alphabet = [..."abcdefghijklmnopqrstuvwxyz"].splice(0, 10);

export const shipTypes: ShipType[] = Object.keys(shipsLength) as ShipType[];

export const DOCS_IN_DOM_ID = "docs-info";

export const ERRORS_MESSAGE = {
    default: "Something went wrong",
    game_start:
        "Both players must place all their ships on the board before starting the game.",
};
export const MetaData = {
    author: "George V.",
    title: "Battleships",
    description: "Battleship game created with React & TypeScript.",
    image: {
        url: OGImage,
        alt: "Battleships logo",
    },
    favicon: Favicon,
};
