import {
    doActionIfValueTruthy,
    generateGameBoardCells,
    generateRandomCoords,
    random,
    randomAttack,
} from "@/lib/utils";

describe("utils", () => {
    describe("doActionIfValueTruthy", () => {
        const key = "key";
        const fn = jest.fn();
        const map1 = new Map([[key, true]]);
        const map2 = new Map([[key, true]]);
        const setup = doActionIfValueTruthy(fn, [map1, map2]);

        afterEach(() => jest.clearAllMocks());

        it("should call the function", () => {
            setup(key);
            expect(fn).toHaveBeenCalled();
        });
        it("shouldn't call the function", () => {
            setup("wrong key");
            expect(fn).not.toHaveBeenCalled();

            const map3 = new Map([[key, false]]);
            const map4 = new Map([[key, true]]);
            const otherMock = jest.fn();
            doActionIfValueTruthy(otherMock, [map3, map4])(key);
            expect(otherMock).not.toHaveBeenCalled();
        });
    });

    it.each(Array(100).fill(null))("should generate a random number", () => {
        const num = random(1, 10);
        expect(num).toBeGreaterThanOrEqual(1);
        expect(num).toBeLessThanOrEqual(10);
    });

    it.each(Array(100).fill(null))("should generate a random coords", () => {
        const { x, y } = generateRandomCoords();
        expect(x).toBeGreaterThanOrEqual(1);
        expect(x).toBeLessThanOrEqual(10);
        expect(y).toBeLessThanOrEqual(10);
        expect(y).toBeGreaterThanOrEqual(1);
    });

    describe("random attack", () => {
        it("should attack the neighbour of the last hit coords", () => {
            const hitCells = generateGameBoardCells();
            const missedCells = generateGameBoardCells();
            const opponentReceiveAttack = jest.fn();
            const toggleTurn = jest.fn();

            hitCells.set("(5,5)", true);

            randomAttack({
                hitCells,
                missedCells,
                opponentReceiveAttack,
                toggleTurn,
            });

            expect(opponentReceiveAttack).toHaveBeenCalledWith({ x: 5, y: 6 });
        });
    });
});
