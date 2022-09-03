import App from "../src/main";

test("convertirFahrenheit(20) igual a -423.67", () => {
  let myApp = new App();
  expect(myApp.convertirFahrenheit(20).toFixed(2)).toBe(((20-273.15) * (1.8) + 32).toFixed(2));
});
