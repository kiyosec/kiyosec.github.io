// JavaScript code moved to an external script.js file

const scanButton = document.getElementById('start-scan');
const scanResultText = document.getElementById('scan-result-text');
const downloadReportLink = document.getElementById('download-report');

// Function to simulate the scan
function performScan() {
    scanResultText.innerHTML = 'Scanning...';

    setTimeout(() => {
        const isInfected = Math.random() < 0.5; // Simulate result (50% chance of infection).

        if (isInfected) {
            scanResultText.innerHTML = 'Virus Found: The file is infected.';
        } else {
            scanResultText.innerHTML = 'No Virus Found: The file is safe.';
        }

        downloadReportLink.style.display = 'block';
    }, 2000); // Simulated scanning time (2 seconds).
}

// Add event listener to the scan button
scanButton.addEventListener('click', () => {
    performScan();
});
