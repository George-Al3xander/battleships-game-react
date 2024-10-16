import Banner from "@/components/banners/banner";

function FleetBanner({ isOpponent }: { isOpponent: boolean }) {
    return (
        <Banner className={{ "bg-gray-600": isOpponent }}>
            {isOpponent ? "opponent" : "your fleet"}
        </Banner>
    );
}

export default FleetBanner;
