function downloadMedia(filePath) {
  const church = prompt("Enter Church Name:");
  const phone = prompt("Enter your phone number:");
  
  if (!church || !phone) return alert("Both fields are required.");

  if (church.toLowerCase() !== 'mwahe altar') {
    return alert("Incorrect Church Name.");
  }

  fetch('/api/log-download', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, file: filePath })
  });

  const a = document.createElement('a');
  a.href = filePath;
  a.download = filePath.split('/').pop();
  a.click();
}
