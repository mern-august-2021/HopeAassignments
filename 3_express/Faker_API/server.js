const express = require("express");
const faker = require("faker");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extened: true}));

const createUser = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }


}

const createCompany = () => {
    return {
        companyName: faker.company.companyName(),
        department: faker.commerce.department(),
        address: {
            streetAddress: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(), 
            country: faker.address.country(),
        }
    }

}

app.get("/api/users/new", (request, response) => {
    const newUsers = createUser();
    console.log("new users")
    console.log(newUsers);
    response.json(newUsers);
});

app.get("/api/companies/new", (request, response) => {
    const newCompany = createCompany();
    console.log("new company")
    console.log(newCompany);
    response.json(newCompany);
});

app.get("api/user/company", (request, response) => {
    const newUsers = createUser();
    const newCompany = createCompany();
    console.log("new users")
    console.log(newUsers);
    console.log("new company")
    console.log(newCompany);
    response.json({user: newUsers, company: newCompany});

});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);