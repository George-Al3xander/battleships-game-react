import { Helmet } from "react-helmet-async";

import { useGameContext } from "@/context/game-context";

import { genMetaTitle } from "@/lib/utils";
import { MetaData } from "@/constants/consts";

function MetaProvider() {
    return (
        <Helmet>
            <title>{genMetaTitle(useGameContext())}</title>
            <link
                rel="shortcut icon"
                href={MetaData["favicon"]}
                type="image/x-icon"
            />
            <meta name="author" content={MetaData["author"]} />
            <meta name="description" content={MetaData["description"]} />
            <meta property="og:title" content="Battleships game" />
            <meta property="og:description" content={MetaData["description"]} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:image" content={MetaData["image"]["url"]} />
        </Helmet>
    );
}

export default MetaProvider;
