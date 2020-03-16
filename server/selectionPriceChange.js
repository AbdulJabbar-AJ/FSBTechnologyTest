const roundTo = require('round-to')

module.exports = (data, socket) => {

    const selections = [];

    data.category.forEach(category => {
        category.subcat.forEach(subcat => {
            subcat.event.forEach(event => {
                event.selection.forEach(({price, id}) => {
                    // This is all very arbitrary
                    // Clearly in reality the price changes will be coming from somewhere, but this is just to simulate random changes and not only whole numbers
                    // The algorithm below will +/- up to 5.00 (2 d.p.) from the current price, but only -neg if it can
                    const random = 10 * (Math.random() - 0.5)
                    const num = (price + random) > 0 ? random : -random
                    selections.push({
                        newPrice: roundTo(price + num, 2),
                        // Bug, this should be not be "id : selection.price"
                        id
                    });
                });
            });
        });
    });

    selections.forEach(selection =>
        setTimeout(() => { socket.emit('selectionPriceUpdate', selection) }, 1000 * (Math.floor(Math.random() * 15) + 1))
    );

};


/***NOTE***/
// round-to npm package as devDependency because only needed on server side



