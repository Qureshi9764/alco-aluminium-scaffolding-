# 🚀 Backend Deployment Guide

## 📋 **Deployment Options Comparison**

| Platform | Cost | Setup Difficulty | Resend Support | Best For |
|----------|------|------------------|----------------|----------|
| **Render** | Free (750h/month) | ⭐ Very Easy | ✅ Perfect | **Recommended** |
| **Railway** | $5/month | ⭐ Very Easy | ✅ Perfect | Production |
| **Vercel** | Free tier | ⭐⭐ Easy | ✅ Perfect | Serverless |
| **Heroku** | $7/month | ⭐⭐ Easy | ✅ Perfect | Traditional |

---

## 🎯 **RECOMMENDED: Render Deployment**

### **Why Render?**
- ✅ **Free tier:** 750 hours/month (enough for most projects)
- ✅ **Zero configuration:** Just connect GitHub
- ✅ **Automatic deployments:** Push to deploy
- ✅ **Built-in SSL:** HTTPS included
- ✅ **Perfect for Resend:** No issues with email services
- ✅ **Easy environment variables:** Simple setup

---

## 📝 **Step-by-Step: Deploy to Render**

### **Step 1: Prepare Your Repository**

1. **Create GitHub repository** (if not already done)
2. **Push your code:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

### **Step 2: Create Render Account**

1. Go to [https://render.com](https://render.com)
2. **Sign up** with GitHub
3. **Connect your GitHub account**

### **Step 3: Deploy Backend Service**

1. **Click "New +"** → **"Web Service"**
2. **Connect your repository**
3. **Configure deployment:**

#### **Basic Settings:**
- **Name:** `alcoa-scaffolding-backend`
- **Runtime:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Instance Type:** `Free` (or `Starter` for production)

#### **Environment Variables:**
Add these in Render dashboard:

```env
# Resend Configuration
RESEND_API_KEY=re_CvdzT36t_7KHxdymvBesH1qdDRJ2a4yzm
RESEND_FROM_EMAIL=Sales@alcoascaffolding.com

# Company Email
COMPANY_EMAIL=sales@alcoascaffolding.com
SUPPORT_EMAIL=sales@alcoascaffolding.com
SECONDARY_EMAIL=sales@alcoascaffolding.com

# Server Configuration
NODE_ENV=production
PORT=10000

# CORS Configuration (Update with your frontend URL)
FRONTEND_URL=https://your-frontend-domain.com

# Company Information
COMPANY_NAME=Alcoa Aluminium Scaffolding
COMPANY_ADDRESS=Musaffah, Abu Dhabi, UAE
EMERGENCY_HOTLINE=+971 58 137 5601
RESPONSE_TIME=2 hours

# Logging
LOG_LEVEL=info
TIMEZONE=Asia/Dubai
```

### **Step 4: Deploy**

1. **Click "Create Web Service"**
2. **Wait for deployment** (2-3 minutes)
3. **Get your backend URL:** `https://alcoa-scaffolding-backend.onrender.com`

---

## 🔧 **Update Frontend for Production**

### **Update API URLs in Frontend:**

In `src/pages/ContactUs.jsx`, change:

```javascript
// From:
const response = await fetch('http://localhost:5000/api/email/send-contact', {

// To:
const response = await fetch('https://alcoa-scaffolding-backend.onrender.com/api/email/send-contact', {
```

**Do the same for quote form:**
```javascript
// From:
const response = await fetch('http://localhost:5000/api/email/send-quote', {

// To:
const response = await fetch('https://alcoa-scaffolding-backend.onrender.com/api/email/send-quote', {
```

---

## 🌐 **Alternative: Railway Deployment**

### **Why Railway?**
- ✅ **$5/month** for unlimited usage
- ✅ **Faster deployments**
- ✅ **Better performance**
- ✅ **Great for production**

### **Railway Steps:**

1. **Go to [railway.app](https://railway.app)**
2. **Sign up with GitHub**
3. **Click "New Project"** → **"Deploy from GitHub repo"**
4. **Select your repository**
5. **Add environment variables** (same as Render)
6. **Deploy automatically**

**Railway will give you:** `https://your-app-name.railway.app`

---

## 🔧 **Environment Variables for Production**

### **Required Variables:**
```env
# Resend (Primary)
RESEND_API_KEY=re_CvdzT36t_7KHxdymvBesH1qdDRJ2a4yzm
RESEND_FROM_EMAIL=Sales@alcoascaffolding.com

# Company Emails
COMPANY_EMAIL=sales@alcoascaffolding.com
SUPPORT_EMAIL=sales@alcoascaffolding.com
SECONDARY_EMAIL=sales@alcoascaffolding.com

# Server
NODE_ENV=production
PORT=10000

# CORS (Your frontend domain)
FRONTEND_URL=https://your-frontend-domain.com

# Company Info
COMPANY_NAME=Alcoa Aluminium Scaffolding
COMPANY_ADDRESS=Musaffah, Abu Dhabi, UAE
EMERGENCY_HOTLINE=+971 58 137 5601
RESPONSE_TIME=2 hours
LOG_LEVEL=info
TIMEZONE=Asia/Dubai
```

---

## 🧪 **Testing Your Deployed Backend**

### **Test Endpoints:**

1. **Health Check:**
   ```
   GET https://your-backend-url.com/api/health
   ```

2. **Email Test:**
   ```
   POST https://your-backend-url.com/api/email/test
   ```

3. **Contact Form:**
   ```
   POST https://your-backend-url.com/api/email/send-contact
   ```

---

## 📊 **Deployment Checklist**

### **Before Deployment:**
- [ ] Code pushed to GitHub
- [ ] Environment variables ready
- [ ] Frontend URLs updated
- [ ] Resend domain verified
- [ ] Test locally first

### **After Deployment:**
- [ ] Backend URL working
- [ ] Health check passes
- [ ] Email test works
- [ ] Contact form works
- [ ] CORS configured correctly
- [ ] SSL certificate active

---

## 🎯 **Recommended Deployment Flow**

### **For Development:**
1. **Local development** with `npm run dev`
2. **Test everything** locally first
3. **Use localhost:5000** for testing

### **For Production:**
1. **Deploy backend** to Render/Railway
2. **Update frontend** API URLs
3. **Deploy frontend** to Netlify/Vercel
4. **Test production** environment
5. **Monitor logs** and performance

---

## 🆘 **Troubleshooting**

### **Common Issues:**

**1. CORS Errors:**
- Update `FRONTEND_URL` in environment variables
- Check frontend is using correct backend URL

**2. Email Not Working:**
- Verify `RESEND_API_KEY` is correct
- Check `RESEND_FROM_EMAIL` matches verified domain
- Test with `/api/email/test` endpoint

**3. Deployment Fails:**
- Check `package.json` has correct start script
- Verify all dependencies are in `dependencies` (not `devDependencies`)
- Check build logs in Render dashboard

**4. Environment Variables:**
- Double-check all variables are set
- No typos in variable names
- Restart service after adding variables

---

## 💰 **Cost Comparison**

| Platform | Free Tier | Paid Plans | Best For |
|----------|-----------|------------|----------|
| **Render** | 750h/month | $7/month | Development & Small Production |
| **Railway** | $5 credit | $5/month | Production |
| **Vercel** | 100GB bandwidth | $20/month | High Traffic |
| **Heroku** | None | $7/month | Traditional Apps |

---

## 🎉 **After Deployment**

### **What You'll Have:**
- ✅ **Professional backend** running 24/7
- ✅ **HTTPS endpoint** for your frontend
- ✅ **Resend email service** working
- ✅ **Automatic deployments** from Git
- ✅ **Monitoring and logs**
- ✅ **Scalable infrastructure**

### **Next Steps:**
1. **Deploy your frontend** to Netlify/Vercel
2. **Update frontend** to use production backend
3. **Test everything** end-to-end
4. **Monitor performance** and logs
5. **Set up monitoring** alerts

---

**Ready to deploy? Choose Render for the easiest setup!** 🚀
