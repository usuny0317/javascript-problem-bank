export default {
  testEnvironment: "node",

  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        pageTitle: "문제 은행 테스트 결과",
        outputPath: "./test-report.html",
        publicPath: "./",
        filename: "test-report.html",
        expand: false,
        hideIcon: true,
        openReport: false,
      },
    ],
  ],
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/fileMock.js",
  },
  testMatch: [
  "<rootDir>/__test__do_not_edit/**/*.test.js",
  "<rootDir>/part1/**/*.test.js",
  "<rootDir>/part2/**/*.test.js"
    
  ],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
