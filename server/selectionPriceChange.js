const roundTo = require('round-to')

module.exports = (data, socket) => {

    const selections = [];

    data.category.forEach(category => {
        category.subcat.forEach(subcat => {
            subcat.event.forEach(event => {
                event.selection.forEach(({price, id}) => {
                    // The algorithm below will +/- up to 5.00 (2 d.p.) from the current price, but only minus if it can do so without going below 0
                    const random = 10 * (Math.random() - 0.5)
                    const num = (price + random) > 0 ? random : -random
                    selections.push({
                        newPrice: roundTo(price + num, 2),
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




