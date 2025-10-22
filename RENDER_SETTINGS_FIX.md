# 🔧 Render Settings Fix

## ❌ **Error You're Getting:**
```
sh: 1: nodemon: not found
==> Running 'npm run dev'
```

## 🎯 **Root Cause:**
Render is trying to run `npm run dev` (which uses nodemon) instead of `npm start`. Nodemon is only available in development, not production.

## ✅ **Solution:**

### **Option 1: Fix Render Settings (Recommended)**

In your Render dashboard:

1. **Go to your service settings**
2. **Update these settings:**

#### **Build Command:**
```
cd backend && npm install
```

#### **Start Command:**
```
cd backend && npm start
```

#### **Root Directory:**
```
backend
```

### **Option 2: Use render.yaml (Alternative)**

I've created a `render.yaml` file in your project root. You can:

1. **Push the render.yaml file to GitHub**
2. **In Render dashboard, choose "Deploy from render.yaml"**

---

## 🚀 **Step-by-Step Fix:**

### **Step 1: Update Render Settings**

1. **Go to [render.com](https://render.com)**
2. **Click on your service** (`alcoa-scaffolding-backend`)
3. **Go to "Settings" tab**
4. **Update these fields:**

#### **Build Command:**
```
cd backend && npm install
```

#### **Start Command:**
```
cd backend && npm start
```

#### **Root Directory:**
```
backend
```

### **Step 2: Save and Redeploy**

1. **Click "Save Changes"**
2. **Go to "Deploys" tab**
3. **Click "Manual Deploy"**
4. **Wait for deployment**

---

## 📋 **Correct Render Configuration:**

| Setting | Value |
|---------|-------|
| **Name** | `alcoa-scaffolding-backend` |
| **Runtime** | `Node` |
| **Build Command** | `cd backend && npm install` |
| **Start Command** | `cd backend && npm start` |
| **Root Directory** | `backend` |
| **Instance Type** | `Free` |

---

## 🧪 **Test After Fix:**

### **1. Check Logs:**
Look for:
```
✅ Using Resend Email Service
🚀 Server running on port 10000
```

### **2. Test Health Check:**
```
GET https://alcoa-scaffolding-backend.onrender.com/api/health
```

### **3. Test Email:**
```
POST https://alcoa-scaffolding-backend.onrender.com/api/email/test
```

---

## 🔍 **Why This Happened:**

- **Render default:** Tries to run `npm run dev` (development command)
- **Production needs:** `npm start` (production command)
- **Nodemon:** Only available in development, not production
- **Solution:** Tell Render to use the correct commands

---

## ✅ **Expected Success:**

After fixing the settings, you should see:
- ✅ **No more nodemon errors**
- ✅ **Server starts with `npm start`**
- ✅ **Resend service loads correctly**
- ✅ **Deployment succeeds**

---

**The fix is simple - just update the Render settings to use the correct commands!** 🚀
