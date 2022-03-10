// slowMath.add(6, 2)
//     .then((sum) => {
//         console.log(sum);
//         let h2Sum = document.createElement('h2');
//         h2Sum.textContent = sum;
//         document.body.appendChild(h2Sum);
//         let product = slowMath.multiply(sum, 2);
//         return product;
//     }).then((product) => {
//         console.log(product);
//         let h2Product = document.createElement('h2');
//         h2Product.textContent = product;
//         document.body.appendChild(h2Product);
//         let quotient = slowMath.divide(product, 4);
//         return quotient;
//     }).then((quotient) => {
//         console.log(quotient);
//         let h2Quotient = document.createElement('h2');
//         h2Quotient.textContent = quotient;
//         document.body.appendChild(h2Quotient);
//         let difference = slowMath.subtract(quotient, 3);
//         return difference;
//     }).then((difference) => {
//         console.log(difference);
//         let h2Difference = document.createElement('h2');
//         h2Difference.textContent = difference;
//         document.body.appendChild(h2Difference);
//         let sum2 = slowMath.add(difference, 98);
//         return sum2;
//     }).then((sum2) => {
//         console.log(sum2);
//         let h2Sum2 = document.createElement('h2');
//         h2Sum2.textContent = sum2;
//         document.body.appendChild(h2Sum2);
//         let remainder = slowMath.remainder(sum2, 2);
//         return remainder;
//     }).then((remainder) => {
//         console.log(remainder);
//         let h2Remainder = document.createElement('h2');
//         h2Remainder.textContent = remainder;
//         document.body.appendChild(h2Remainder);
//         let product2 = slowMath.multiply(remainder, 50);
//         return product2;
//     }).then((product2) => {
//         console.log(product2);
//         let h2Product2 = document.createElement('h2');
//         h2Product2.textContent = product2;
//         document.body.appendChild(h2Product2);
//         let remainder2 = slowMath.remainder(product2, 40);
//         return remainder2;
//     }).then((remainder2) => {
//         console.log(remainder2);
//         let h2Remainder2 = document.createElement('h2');
//         h2Remainder2.textContent = remainder2;
//         document.body.appendChild(h2Remainder2);
//         let lastSum = slowMath.add(remainder2, 32);
//         return lastSum;
//     }).then((lastSum) => {
//         console.log(`The final result is ${lastSum}.`);
//         let h2LastSum = document.createElement('h2');
//         h2LastSum.textContent = `The final result is ${lastSum}.`;
//         document.body.appendChild(h2LastSum);
//     }).catch((err) => {
//         console.log(err);
//         let h2Err = document.createElement('h2');
//         h2Err.textContent = err;
//         document.body.appendChild(h2Err);
//     })

async function doMath() {
    try {
        let sum = await slowMath.add(6,2);
            console.log(sum);

            let h2Sum = document.createElement('h2');
            h2Sum.textContent = sum;
            document.body.appendChild(h2Sum);

        let product = await slowMath.multiply(sum, 2);
            console.log(product);

            let h2Product = document.createElement('h2');
            h2Product.textContent = product;
            document.body.appendChild(h2Product);

        let quotient = await slowMath.divide(product, 4);

            console.log(quotient);

            let h2Quotient = document.createElement('h2');
            h2Quotient.textContent = quotient;
            document.body.appendChild(h2Quotient);

        let difference = await slowMath.subtract(quotient, 3);

            console.log(difference);

            let h2Difference = document.createElement('h2');
            h2Difference.textContent = difference;
            document.body.appendChild(h2Difference);

        let sum2 = await slowMath.add(difference, 98);

            console.log(sum2);
            let h2Sum2 = document.createElement('h2');
            h2Sum2.textContent = sum2;
            document.body.appendChild(h2Sum2);

        let remainder = await slowMath.remainder(sum2, 2);
            console.log(remainder);

            let h2Remainder = document.createElement('h2');
            h2Remainder.textContent = remainder;
            document.body.appendChild(h2Remainder);

        let product2 = await slowMath.multiply(remainder, 50);
            console.log(product2);

            let h2Product2 = document.createElement('h2');
            h2Product2.textContent = product2;
            document.body.appendChild(h2Product2);

        let remainder2 = await slowMath.remainder(product2, 40);
            console.log(remainder2);

            let h2Remainder2 = document.createElement('h2');
            h2Remainder2.textContent = remainder2;
            document.body.appendChild(h2Remainder2);

        let lastSum = await slowMath.add(remainder2, 32);
            console.log(`The final result is ${lastSum}.`);

            let h2LastSum = document.createElement('h2');
            h2LastSum.textContent = `The final result is ${lastSum}.`;
            document.body.appendChild(h2LastSum);

    } catch (err) {
        console.log(err);
        let h2Err = document.createElement('h2');
        h2Err.textContent = err;
        document.body.appendChild(h2Err);
    }
}
doMath();