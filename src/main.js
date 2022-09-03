export default class App {

    convertirLibras(kilos){

        let resultado = (kilos) * (2.20462);

        return resultado;
    }

    convertirFahrenheit(Kelvin){

        let resultado = ((Kelvin) - (273.15)) * (1.8) + (32);

        return resultado;
    }

    calcularCostoTotal(kilo, costoKilo){

        let resultado = (kilo) * (costoKilo)

        return resultado;
    }

    calcularPrecioCombustible(largo, ancho, alto, litroGasolina){

        let resultado = ((largo) * (ancho) * (alto)) * (litroGasolina)

        return resultado;
    }

}

let app = new App();

console.log(app.convertirLibras(5));

console.log(app.convertirFahrenheit(373));

let r = (app.calcularCostoTotal(8, 10));
console.log(r);

let s = (app.calcularPrecioCombustible(15, 12, 20, 21.64));
console.log(s);


