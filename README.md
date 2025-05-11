# password-validation

# 🔐 Password Validation Utility

A robust and customizable **Node.js-based password validation tool**, built to enforce strong password policies in web applications or backend systems. Includes comprehensive **unit tests using Mocha and Chai**.

> **Author:** Anthony Onchari  
> **Version:** 1.0.0  
> **License:** MIT

---

## 📋 Features

✅ Validates passwords based on:
- Minimum length of **8 characters**
- At least **one uppercase** letter (A–Z)
- At least **one lowercase** letter (a–z)
- At least **one numeric** digit (0–9)
- At least **one special character** (`!@#$%^&*()_+-=[]{}|;':",.<>/?`)

🧪 Test suite highlights:
- Uses [**Mocha**](https://mochajs.org/) for test organization
- Uses [**Chai**](https://www.chaijs.com/) for expressive assertions
- Covers **valid and invalid** password combinations

---

## 🧠 Use Cases

This utility can be integrated into:
- 🔐 User authentication systems
- 📲 Frontend form validation
- 💾 Backend API input sanitization
- 🧪 CI pipelines to enforce validation logic correctness

---

## 📂 Project Structure

```bash
password-validation/
├── password.js           # Core validation logic
├── password.test.js      # Mocha/Chai test suite
├── package.json          # Project metadata and dependencies
├── README.md             # Full documentation
└── node_modules/         # Installed dependencies  this is nice but give it a happy ending


With this Password Validation Utility, you can ensure that users create secure passwords that meet the necessary criteria to protect their accounts and personal data. Whether you're working on a user authentication system, frontend forms, or backend input sanitization, this tool offers the flexibility and reliability needed to enforce strong password policies.
Happy coding! 👨‍💻👩‍💻