const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  country: { type: String, required: true },
  customerName: { type: String, required: true },
  companyType: { type: String, required: true },
  industry: { type: String, required: true },
  gstrNumber: { type: String, required: true },
  isActive: { type: Boolean, default: true },

  address: {
    street1: { type: String, required: true },
    street2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true }
  },

  pointOfContact: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    roleInApp: { type: String, required: true },
    designation: { type: String, required: true },
    customerId: { type: String, required: true },
  }
});

module.exports = mongoose.model('Company', companySchema);
