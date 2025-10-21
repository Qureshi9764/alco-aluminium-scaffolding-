# 📧 Email Backend Setup Guide

Complete guide to set up the Nodemailer backend for Alcoa Scaffolding contact forms.

---

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Gmail Configuration](#gmail-configuration)
3. [Backend Installation](#backend-installation)
4. [Testing](#testing)
5. [Deployment](#deployment)
6. [Troubleshooting](#troubleshooting)

---

## 1️⃣ Prerequisites

Before starting, ensure you have:
- ✅ **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- ✅ **npm** (comes with Node.js)
- ✅ **Gmail account** (for sending emails)
- ✅ **Git** (optional, for version control)

Check your Node.js version:
```bash
node --version
npm --version
```

---

## 2️⃣ Gmail Configuration

### Step 1: Enable 2-Factor Authentication

1. Go to your [Google Account Security](https://myaccount.google.com/security)
2. Scroll to "Signing in to Google"
3. Click **"2-Step Verification"**
4. Follow the setup wizard to enable it

### Step 2: Generate App Password

⚠️ **IMPORTANT:** You CANNOT use your regular Gmail password. You MUST use an App Password!

1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Or: Google Account → Security → 2-Step Verification → App passwords
   
2. You may be asked to sign in again

3. At the bottom, select:
   - **App:** Choose "Mail"
   - **Device:** Choose "Windows Computer" (or your device)

4. Click **"Generate"**

5. Google will show a 16-character password like: `abcd efgh ijkl mnop`

6. **Copy this password** (remove spaces: `abcdefghijklmnop`)

7. **Keep it safe** - you'll need it for the `.env` file

---

## 3️⃣ Backend Installation

### Step 1: Navigate to Backend Directory

Open your terminal/PowerShell and navigate to the backend folder:

```bash
cd backend
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- ✅ Express (web framework)
- ✅ Nodemailer (email sending)
- ✅ CORS (cross-origin requests)
- ✅ Helmet (security)
- ✅ Express Rate Limit (rate limiting)
- ✅ Dotenv (environment variables)

### Step 3: Create Environment File

Create a `.env` file in the `backend` folder:

```bash
# Windows PowerShell
copy env.example .env

# Or manually create .env file
```

### Step 4: Configure Environment Variables

Open `.env` file and update with your details:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
```

**Example:**
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
EMAIL_USER=alcoaaluminiumscaffolding1@gmail.com
EMAIL_PASS=abcdefghijklmnop
```

⚠️ **Replace with YOUR actual Gmail and App Password!**

### Step 5: Start the Backend Server

**Development Mode (with auto-reload):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

You should see:
```
🚀 Server running on port 5000
📧 Email service ready
🌐 Frontend URL: http://localhost:5173
```

---

## 4️⃣ Testing

### Test 1: Health Check

Open your browser and visit:
```
http://localhost:5000/api/health
```

You should see:
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

### Test 2: Send Test Email (Using cURL)

**Windows PowerShell:**
```powershell
$body = @{
    name = "Test User"
    email = "test@example.com"
    phone = "+971501234567"
    message = "This is a test message"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/email/send-contact" -Method POST -Body $body -ContentType "application/json"
```

**Or use Postman/Thunder Client:**
- URL: `http://localhost:5000/api/email/send-contact`
- Method: `POST`
- Headers: `Content-Type: application/json`
- Body (JSON):
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "+971501234567",
  "company": "Test Company",
  "projectType": "commercial",
  "message": "This is a test message from the contact form"
}
```

### Test 3: Test from Frontend

1. Make sure backend is running (port 5000)
2. Start your frontend:
```bash
cd ..
npm run dev
```
3. Open browser: `http://localhost:5173`
4. Navigate to "Contact Us" page
5. Fill out the form and submit
6. Check your Gmail inbox for the email!

---

## 5️⃣ Deployment

### Option A: Deploy to Render (Recommended - FREE)

1. **Create account:** [render.com](https://render.com)

2. **Create Web Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select `backend` folder as root directory

3. **Configure:**
   - **Name:** `alcoa-backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free

4. **Add Environment Variables:**
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   FRONTEND_URL=https://your-frontend-url.com
   NODE_ENV=production
   ```

5. **Deploy!** 🚀

### Option B: Deploy to Railway

1. **Create account:** [railway.app](https://railway.app)
2. **New Project** → Import from GitHub
3. Select `backend` folder
4. Add environment variables
5. Deploy!

### Option C: Deploy to Heroku

```bash
# Install Heroku CLI
# Login
heroku login

# Create app
heroku create alcoa-backend

# Set environment variables
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
heroku config:set FRONTEND_URL=https://your-frontend.com

# Deploy
git subtree push --prefix backend heroku main
```

### Update Frontend URL

After deployment, update your **frontend** `ContactUs.jsx`:

Replace:
```javascript
'http://localhost:5000/api/email/send-contact'
```

With:
```javascript
'https://your-backend-url.com/api/email/send-contact'
```

---

## 6️⃣ Troubleshooting

### ❌ Problem: "Invalid login" or "Username and Password not accepted"

**Solution:**
- ✅ Make sure you're using App Password (not regular Gmail password)
- ✅ App Password should be 16 characters (remove spaces)
- ✅ Enable 2-Factor Authentication first
- ✅ Regenerate App Password if needed

### ❌ Problem: "CORS Error" in browser

**Solution:**
- ✅ Check `FRONTEND_URL` in `.env` matches your frontend URL exactly
- ✅ Make sure backend is running
- ✅ Check for typos in URL (http vs https, trailing slash)

### ❌ Problem: "Cannot POST /api/email/send-contact"

**Solution:**
- ✅ Backend server is running on port 5000
- ✅ Check URL is correct: `http://localhost:5000/api/email/send-contact`
- ✅ Check request method is POST

### ❌ Problem: Emails not received

**Solution:**
- ✅ Check spam/junk folder
- ✅ Verify EMAIL_USER in .env is correct
- ✅ Check server logs for errors
- ✅ Test with a different email address

### ❌ Problem: "Rate limit exceeded"

**Solution:**
- ✅ Wait 15 minutes
- ✅ Or increase limit in `server.js`:
```javascript
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50 // Increase from 10 to 50
});
```

### ❌ Problem: Port 5000 already in use

**Solution:**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change port in .env
PORT=5001
```

---

## 📊 API Endpoints Reference

### 1. Health Check
```
GET /api/health
```

### 2. Send Contact Form
```
POST /api/email/send-contact

Body:
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (required)",
  "company": "string (optional)",
  "projectType": "string (optional)",
  "message": "string (required)"
}
```

### 3. Send Quote Request
```
POST /api/email/send-quote

Body:
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (required)",
  "company": "string (optional)",
  "projectType": "string (optional)",
  "message": "string (optional)",
  "projectHeight": "string (optional)",
  "coverageArea": "string (optional)",
  "duration": "string (optional)",
  "startDate": "string (optional)"
}
```

---

## 🔐 Security Best Practices

1. ✅ **Never commit `.env` file** to Git (already in `.gitignore`)
2. ✅ **Use App Passwords** (not regular Gmail password)
3. ✅ **Rate limiting enabled** (10 requests per 15 min)
4. ✅ **CORS configured** (only allows your frontend)
5. ✅ **Helmet security headers** enabled
6. ✅ **Input validation** on all endpoints

---

## 📞 Support

If you encounter any issues:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review server logs in terminal
3. Check Gmail settings and App Password
4. Verify all environment variables are correct

For additional help:
- Email: alcoaaluminiumscaffolding1@gmail.com
- Check backend logs: `npm run dev` (shows detailed errors)

---

## ✅ Quick Checklist

Before going live, verify:

- [ ] Gmail 2FA enabled
- [ ] App Password generated and added to `.env`
- [ ] `.env` file configured correctly
- [ ] Backend dependencies installed (`npm install`)
- [ ] Backend server starts without errors
- [ ] Test email sent successfully
- [ ] Frontend updated with backend URL
- [ ] CORS configured for production frontend URL
- [ ] Backend deployed (Render/Railway/Heroku)
- [ ] Production environment variables set
- [ ] Test from production frontend

---

## 🎉 Success!

If you've completed all steps:
1. ✅ Backend is running
2. ✅ Emails are being sent
3. ✅ Frontend is connected
4. ✅ Everything is working!

**Your contact form is now fully functional!** 🚀

---

**Last Updated:** October 2025  
**Version:** 1.0.0

