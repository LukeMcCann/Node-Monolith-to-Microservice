const databaseFunction = () => {
    const config = {};
    const data = [
        {
            title: 'Post One',
            content: 'This is my first post!'
        },
        {
            title: 'Post Two',
            content: 'This is my Second post!'
        },
        {
            title: 'Post Three',
            content: 'This is my third post!'
        },
        {
            title: 'Post Four',
            content: 'This is my fourth post!'
        }
    ];

    // change to config.hasData to simulate crash
    if (true) {
        return data;
    } else {
        process.exit(1);
    }

}

module.exports = {
    databaseFunction
};