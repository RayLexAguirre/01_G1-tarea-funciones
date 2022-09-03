import App from "../src/main";

test("convertirLibras(45): to equal 99.20", () => {
  let myApp = new App();
  expect(myApp.convertirLibras(45).toFixed(1)).toBe((99.20).toFixed(1));
});
