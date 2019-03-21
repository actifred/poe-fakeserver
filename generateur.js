module.exports = function() {
    var faker = require('faker');
    var _ = require('lodash');
    return {
        users: _.times(50, (n) => {
            return {
                id: n,
                firstname: faker.name.firstName(),
                lastname: faker.name.lastName(),
                email: faker.internet.email(),
                avatar: faker.internet.avatar()
            }
        })
    }
}