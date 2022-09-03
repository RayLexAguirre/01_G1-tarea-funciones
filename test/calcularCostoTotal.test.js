import App from "../src/main";

test("calcularCostoTotal(10, 7.5): equal 75", () => {
  let myApp = new App();
  expect(myApp.calcularCostoTotal(10, 7.5).toFixed(2)).toBe((10*7.5).toFixed(2));
});
