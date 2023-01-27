const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart); // [ 'Milk', 'Coffee', 'Tea', 'Honey' ]

// add 'Meat' in the beginning of your shopping cart if it has not been already added
// Using unshift() of method we can do this
shoppingCart.unshift('Meat');
console.log(shoppingCart); // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]

// add Sugar at the end of your shopping cart if it has not been already added
// Using push() of method we can do this
shoppingCart.push('Sugar');
console.log(shoppingCart); // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]

// remove 'Honey'
// Using splice() of method we can do this
shoppingCart.splice(4,1);
console.log(shoppingCart); // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Sugar' ]

// modify Tea to 'Green Tea'
// using index we can modify
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart); // [ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]