module.exports = (data, socket) => {

    const events = [];

    data.category.forEach(category => {
        category.subcat.forEach(subcat => {
            subcat.event.forEach(event => {
                const { id, active } = event;
                events.push({
                    active: !active,
                    id
                });
            });
        });
    });

    events.forEach(event =>
        setTimeout(() => { socket.emit('eventStateUpdate', event) }, 1000 * (Math.floor(Math.random() * 25) + 1))
    );

};

