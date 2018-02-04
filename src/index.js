import numeral from 'numeral';
import './index.css';

const courseValue = numeral(10).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course`);
