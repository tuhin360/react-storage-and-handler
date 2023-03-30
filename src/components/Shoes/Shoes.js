import React from 'react';
import { add, multiply, subtract } from '../../utilities/calculate';

const Shoes = () => {
    const first = 10;
    const second = 5;
    const result = multiply(first, second);
    const sum = add(first, second);
    const sub = subtract(first, second);
    return (
        <div>
            <h3>This is shoes component</h3>
            <p>Multiply: {result} & total {sum} & Subtract: {sub}</p>
        </div>
    );
};

export default Shoes;