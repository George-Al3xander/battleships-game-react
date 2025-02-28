import type { Config } from "jest";

// Add any custom config to be passed to Jest
const config: Config = {
    coverageProvider: "v8",
    testEnvironment: "jest-environment-jsdom",
    // Add more setup options before each test is run
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    preset: "ts-jest",
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                diagnostics: {
                    ignoreCodes: ["TS151001"],
                },
                tsconfig: "./tsconfig.json",
            },
        ],
        "^.+\\.ts?$": [
            "ts-jest",
            {
                diagnostics: {
                    ignoreCodes: ["TS151001"],
                },
                tsconfig: "./tsconfig.json",
            },
        ],
    },
};

export default config;
