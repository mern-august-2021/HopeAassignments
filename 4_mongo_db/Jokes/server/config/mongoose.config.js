const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the Jokes database"))
    .catch(err => console.log("Something went wron when connecting to the Jokes database", err));