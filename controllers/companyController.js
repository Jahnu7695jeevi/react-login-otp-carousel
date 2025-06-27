const Company = require('../models/Company');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Create Company and Register POC as User
exports.createCompany = async (req, res) => {
  try {
    const {
      country,
      customerName,
      companyType,
      industry,
      gstrNumber,
      isActive,
      address,
      pointOfContact
    } = req.body;

    // 1. Save company
    const company = await Company.create({
      country,
      customerName,
      companyType,
      industry,
      gstrNumber,
      isActive,
      address,
      pointOfContact
    });

    // 2. Create User for POC email if not already exists
    const existingUser = await User.findOne({ email: pointOfContact.email });
    if (!existingUser) {
      const newUser = await User.create({
        name: pointOfContact.name,
        email: pointOfContact.email,
        username: pointOfContact.email.split('@')[0],
        mobilenumber: pointOfContact.phone,
        role: pointOfContact.roleInApp
        // password not required; login via OTP
      });
    }

    res.status(201).json({ message: 'Company created successfully', company });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create company', error: err.message });
  }
};
// GET ALL COMPANIES
exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch companies', error: err.message });
  }
};

// GET SINGLE COMPANY BY ID
exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.json(company);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch company', error: err.message });
  }
};

// UPDATE COMPANY
exports.updateCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });

    Object.assign(company, req.body); // Merge new data into existing object
    await company.save();

    res.json({ message: 'Company updated successfully', company });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update company', error: err.message });
  }
};

// DELETE COMPANY
exports.deleteCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });

    await company.deleteOne();
    res.json({ message: 'Company deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete company', error: err.message });
  }
};