// 📧 Remove duplicate emails using Set

const emails = [
    "a@gmail.com",
    "b@gmail.com",
    "a@gmail.com",
    "c@gmail.com",
    "b@gmail.com"
];

const uniqueEmails = [...new Set(emails)];

console.log("✅ Unique Emails:", uniqueEmails);
