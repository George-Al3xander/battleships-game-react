import {
    PlacingGameBoard,
    SetupButtons,
    SetupInstructions,
    ShipModels,
} from "@/components/game setup";

function ShipPlacingWindow() {
    return (
        <div className="m-4 flex flex-col items-center gap-10">
            <div className="flex shrink-0 flex-col items-center gap-10 lg:flex-row lg:items-start">
                <PlacingGameBoard />
                <ShipModels />
            </div>
            <SetupInstructions />
            <SetupButtons />
        </div>
    );
}

export default ShipPlacingWindow;
