module.exports = (sequelize, Sequelize) => {
    const Entry = sequelize.define("entries", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        } 
    });

    return Entry;
}