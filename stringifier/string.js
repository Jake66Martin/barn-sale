const fs = require('fs');

// Read the contents of the service account key file
const serviceAccountKey = fs.readFileSync('soy-sound-399522-4b913f530ad1.json', 'utf8');

// Encode the contents as a JSON string
const serviceAccountKeyJsonString = JSON.stringify(serviceAccountKey);

console.log(serviceAccountKeyJsonString);