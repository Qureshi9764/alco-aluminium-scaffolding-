# 🔧 Render Deployment Fix

## ❌ **Error You're Getting:**
```
Deploy failed for 482293c: Switch to SMTP port 587 with STARTTLS for better cloud server compatibility
Exited with status 127 while running your code.
```

## 🎯 **Root Cause:**
The deployment is trying to use Nodemailer (SMTP) instead of Resend, even though you have Resend configured.

## ✅ **Solution Applied:**

### **1. Fixed Email Controller**
- **Removed fallback to Nodemailer**
- **Forced Resend service** for production
- **Added better error handling**

### **2. Created Production Configuration**
- **render.yaml** - Render-specific config
- **test-env.js** - Environment variable tester

---

## 🚀 **Deployment Steps (Updated):**

### **Step 1: Push Updated Code**
```bash
git add .
git commit -m "Fix: Force Resend service for production deployment"
git push origin main
```

### **Step 2: Render Configuration**

#### **Basic Settings:**
- **Name:** `alcoa-scaffolding-backend`
- **Runtime:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Instance Type:** `Free`

#### **Environment Variables (Add these in Render dashboard):**
```env
NODE_ENV=production
PORT=10000
RESEND_API_KEY=re_CvdzT36t_7KHxdymvBesH1qdDRJ2a4yzm
RESEND_FROM_EMAIL=Sales@alcoascaffolding.com
COMPANY_EMAIL=sales@alcoascaffolding.com
SUPPORT_EMAIL=sales@alcoascaffolding.com
SECONDARY_EMAIL=sales@alcoascaffolding.com
FRONTEND_URL=https://your-frontend-domain.com
COMPANY_NAME=Alcoa Aluminium Scaffolding
COMPANY_ADDRESS=Musaffah, Abu Dhabi, UAE
EMERGENCY_HOTLINE=+971 58 137 5601
RESPONSE_TIME=2 hours
LOG_LEVEL=info
TIMEZONE=Asia/Dubai
```

### **Step 3: Deploy**
1. **Click "Create Web Service"**
2. **Wait for deployment**
3. **Check logs** for "✅ Using Resend Email Service"

---

## 🧪 **Test After Deployment:**

### **1. Health Check:**
```
GET https://alcoa-scaffolding-backend.onrender.com/api/health
```

### **2. Email Test:**
```
POST https://alcoa-scaffolding-backend.onrender.com/api/email/test
```

### **3. Check Logs:**
In Render dashboard, look for:
- ✅ "Using Resend Email Service"
- ✅ "Resend client initialized successfully"

---

## 🔍 **If Still Failing:**

### **Check Render Logs:**
1. **Go to Render dashboard**
2. **Click on your service**
3. **Go to "Logs" tab**
4. **Look for error messages**

### **Common Issues:**

**1. Environment Variables Not Set:**
- Double-check all variables are added
- No typos in variable names
- Restart service after adding variables

**2. Resend API Key Issues:**
- Verify key is correct: `re_CvdzT36t_7KHxdymvBesH1qdDRJ2a4yzm`
- Check key is not expired
- Ensure domain is verified

**3. Build Issues:**
- Check Node version is 18+
- Verify all dependencies are in `dependencies` (not `devDependencies`)
- Check build logs for errors

---

## 📋 **Deployment Checklist:**

### **Before Deployment:**
- [ ] Code pushed to GitHub
- [ ] Email controller updated (force Resend)
- [ ] Environment variables ready
- [ ] No SMTP configuration active

### **After Deployment:**
- [ ] Service starts without errors
- [ ] Logs show "Using Resend Email Service"
- [ ] Health check passes
- [ ] Email test works
- [ ] No SMTP-related errors

---

## 🎯 **Expected Success Logs:**

```
✅ Using Resend Email Service
✅ Resend client initialized successfully
🚀 Server running on port 10000
📧 Email transporter is ready to send messages via Resend
```

---

## 🆘 **Still Having Issues?**

### **Debug Steps:**
1. **Check environment variables** in Render dashboard
2. **Verify Resend API key** is correct
3. **Check domain verification** in Resend dashboard
4. **Test locally first** with same environment variables
5. **Contact Render support** if needed

### **Quick Test Locally:**
```bash
cd backend
node test-env.js
```

This will show if environment variables are loaded correctly.

---

**The fix should resolve the SMTP error and force Resend usage!** 🚀
