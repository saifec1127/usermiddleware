let users = [];

const find = () => {
    return new Promise((resolve) => {
        resolve(users);
    });
};

const create = (user) => {
    return new Promise((resolve) => {
        users.push(user);
        resolve(user);
    });
};

module.exports = {
    find,
    create,
};
