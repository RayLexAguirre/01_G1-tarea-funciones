import App from "../src/main";

test("calcularPrecioCombustible(10, 5, 4, 22.3): equal 4460", () => {
  let myApp = new App();
  expect(myApp.calcularPrecioCombustible(10, 5, 4, 22.3).toFixed(2)).toBe((10*5*4*22.3).toFixed(2));
});
