// Check authentication
if (!localStorage.getItem('isAdmin')) {
    window.location.href = 'index.html';
}

// DOM Elements
const logoutBtn = document.getElementById('logoutBtn');
const requestsTableBody = document.getElementById('requestsTableBody');
const totalRequestsEl = document.getElementById('totalRequests');
const noRequestsEl = document.getElementById('noRequests');
const requestsTable = document.getElementById('requestsTable');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModalBtn = document.querySelector('.close');

// Logout
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isAdmin');
    window.location.href = 'index.html';
});

// Load repair requests
function loadRequests() {
    const requests = JSON.parse(localStorage.getItem('repairRequests') || '[]');
    
    if (requests.length === 0) {
        noRequestsEl.style.display = 'block';
        requestsTable.style.display = 'none';
    } else {
        noRequestsEl.style.display = 'none';
        requestsTable.style.display = 'table';
        
        // Update stats
        totalRequestsEl.textContent = requests.length;
        
        // Populate table
        requestsTableBody.innerHTML = '';
        requests.reverse().forEach((request, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${request.date}</td>
                <td>${request.reporterName}</td>
                <td>${request.email}</td>
                <td>${request.location}</td>
                <td>${request.details}</td>
                <td>
                    ${request.image ? 
                        `<button class="view-image-btn" onclick="viewImage('${request.image}')">ดูรูปภาพ</button>` : 
                        'ไม่มีรูปภาพ'
                    }
                </td>
                <td>
                    <button class="delete-btn" onclick="deleteRequest(${request.id})">ลบ</button>
                </td>
            `;
            requestsTableBody.appendChild(row);
        });
    }
}

// View image
function viewImage(imageData) {
    modalImage.src = imageData;
    imageModal.style.display = 'block';
}

// Close image modal
closeModalBtn.addEventListener('click', () => {
    imageModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        imageModal.style.display = 'none';
    }
});

// Delete request
function deleteRequest(id) {
    if (confirm('คุณต้องการลบรายการนี้ใช่หรือไม่?')) {
        let requests = JSON.parse(localStorage.getItem('repairRequests') || '[]');
        requests = requests.filter(req => req.id !== id);
        localStorage.setItem('repairRequests', JSON.stringify(requests));
        loadRequests();
    }
}

// Make functions globally accessible
window.viewImage = viewImage;
window.deleteRequest = deleteRequest;

// Initial load
loadRequests();
