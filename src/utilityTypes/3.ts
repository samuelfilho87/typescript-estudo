interface Car {
    model: string;
    brand?: string;
}

const car: Required<Car> = {
    model: 'Mustag',
    brand: 'Ford'
}
