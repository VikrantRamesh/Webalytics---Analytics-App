const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const customerSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    domain: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength:6
    },
    
    
});

// Custom methods on the Customer model

customerSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    // 'this' here refers to the document that is about to be saved 
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


// Defining a custom login function
customerSchema.statics.login = async function(username, password){
    // 'this' here refers to the collection
    const customer = await this.findOne({username});

    if(customer){
        // Comparing entered password with password on the Database
        const auth = await bcrypt.compare(password, customer.password);
        if(auth){
            return customer;
        }
        // throw Error("Incorrect Password");
    }
    throw Error("Invalid Username/Password");
    
}

module.exports = mongoose.model('customer', customerSchema, 'customers');