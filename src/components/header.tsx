import InstructionsLink from "@/components/instructions-link.tsx";

function Header() {
    return (
        <header className="bg-accent mb-10 flex w-full justify-between p-4">
            <h1 className="text-3xl font-bold uppercase text-gray-700">
                Battleship
            </h1>
            <InstructionsLink />
        </header>
    );
}

export default Header;
