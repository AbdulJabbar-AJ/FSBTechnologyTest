module.exports = (data, socket) => {

    const selections = [];

    data.category.forEach(category => {
        category.subcat.forEach(subcat => {
            subcat.event.forEach(event => {
                event.selection.forEach(selection => {
                    const { id, active } = selection;
                    selections.push({
                        // Irrelevant math.random here, just invert boolean, otherwise loads of useless calls, not always changing
                        active: !active,
                        // Don't need price here
                        // price,
                        id
                    });
                });
            });
        });
    });

    selections.forEach(selection =>
        setTimeout(() => { socket.emit('selectionStateUpdate', selection) }, 1000 * (Math.floor(Math.random() * 25) + 1))
    );

};




// Do need price in this object
// Irrelevant math.random here, just invert boolean, otherwise loads of useless calls, not always changing
