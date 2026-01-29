# ระบบแจ้งซ่อม (Repair Request System)

A simple web-based repair request management system built with HTML, CSS, and JavaScript.

## Features

### Home Page (index.html)
- **Header**: System title "ระบบแจ้งซ่อม"
- **Admin Login Button**: Opens a modal for admin authentication
- **Repair Request Form**: Submit repair requests with:
  - Name (ชื่อผู้แจ้ง)
  - Email (อีเมล)
  - Location (สถานที่)
  - Details (รายละเอียด)
  - Image Upload (อัพโหลดรูปภาพประกอบ)
- **Success Notification**: Displays confirmation after submission

### Admin Panel (admin.html)
- **Authentication**: Secure login required
- **Statistics**: Shows total number of repair requests
- **Repair Requests Table**: Displays all submitted requests with:
  - Request number
  - Date and time
  - Reporter information
  - Location and details
  - Image viewer
  - Delete functionality
- **Logout**: Secure logout option

## How to Use

### For Users
1. Open `index.html` in your web browser
2. Fill out the repair request form with all required information
3. Optionally upload an image
4. Click "ส่งคำขอแจ้งซ่อม" to submit
5. You'll see a success message confirming your submission

### For Administrators
1. Click "เข้าสู่ระบบผู้ดูแล" button on the home page
2. Enter credentials:
   - Username: `admin`
   - Password: `admin123`
3. View all repair requests in the table
4. Click "ดูรูปภาพ" to view uploaded images
5. Click "ลบ" to delete a request
6. Click "ออกจากระบบ" to logout

## Technical Details

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Data Storage**: localStorage (client-side)
- **Image Handling**: Base64 encoding
- **Responsive Design**: Works on desktop and mobile devices

## Files Structure

```
├── index.html      # Home page with repair request form
├── admin.html      # Admin panel for managing requests
├── styles.css      # Stylesheet for both pages
├── script.js       # JavaScript for home page functionality
├── admin.js        # JavaScript for admin panel functionality
└── README.md       # This file
```

## Running the Application

### Option 1: Direct File Access
Simply open `index.html` in your web browser.

### Option 2: Local Web Server
```bash
# Using Python 3
python3 -m http.server 8000

# Then open http://localhost:8000/index.html in your browser
```

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Modern mobile browsers

## Security Note

⚠️ This is a demo application using client-side storage and simple authentication. For production use, implement:
- Server-side authentication
- Database storage
- HTTPS encryption
- Input validation and sanitization
- File upload security measures

## License

This project is open source and available for educational purposes.