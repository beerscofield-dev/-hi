// DOM Elements
const adminLoginBtn = document.getElementById('adminLoginBtn');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');
const repairForm = document.getElementById('repairForm');
const imageInput = document.getElementById('image');
const imagePreview = document.getElementById('imagePreview');
const successMessage = document.getElementById('successMessage');
const closeBtn = document.querySelector('.close');

// Modal handling
adminLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Admin login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple authentication (in production, use proper backend authentication)
    if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('isAdmin', 'true');
        window.location.href = 'admin.html';
    } else {
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
});

// Image preview
imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
    }
});

// Form submission
repairForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        id: Date.now(),
        reporterName: document.getElementById('reporterName').value,
        email: document.getElementById('email').value,
        location: document.getElementById('location').value,
        details: document.getElementById('details').value,
        date: new Date().toLocaleString('th-TH'),
        image: null
    };
    
    // Handle image
    const imageFile = imageInput.files[0];
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
            formData.image = e.target.result;
            saveRequest(formData);
        };
        reader.readAsDataURL(imageFile);
    } else {
        saveRequest(formData);
    }
});

function saveRequest(formData) {
    // Get existing requests from localStorage
    let requests = JSON.parse(localStorage.getItem('repairRequests') || '[]');
    
    // Add new request
    requests.push(formData);
    
    // Save to localStorage
    localStorage.setItem('repairRequests', JSON.stringify(requests));
    
    // Show success message
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
    
    // Reset form
    repairForm.reset();
    imagePreview.innerHTML = '';
}
