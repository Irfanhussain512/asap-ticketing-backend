# 🚀 ASAP Ticketing - Live Payment Backend

## 📋 **Quick Deployment to Railway**

### **Step 1: Update Your Live Secret Key**
1. Open `server.js`
2. Replace `sk_live_...hfny` with your actual live secret key
3. Save the file

### **Step 2: Deploy to Railway**
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Create a new GitHub repository
5. Upload these files to your GitHub repo
6. Connect Railway to your GitHub repo
7. Railway will automatically deploy

### **Step 3: Get Your Backend URL**
After deployment, Railway will give you a URL like:
`https://your-app-name.railway.app`

### **Step 4: Update Frontend**
Update `src/config/stripe.js` in your main project:
```javascript
apiUrl: 'https://your-app-name.railway.app/api'
```

### **Step 5: Deploy Frontend**
1. Run `npm run build` in your main project
2. Upload `build` folder to Netlify
3. Your site is live with live payments!

## 🧪 **Testing**

### **Health Check:**
Visit: `https://your-app-name.railway.app/api/health`

### **Test Payment:**
Your frontend will now process live payments with real money!

## 💰 **What Happens:**
- ✅ **Real money** charged to customers
- ✅ **Transaction IDs**: `pi_live_...` (not `pi_test_...`)
- ✅ **Money goes to**: Your Stripe account
- ✅ **Fees**: 2.9% + 30¢ per transaction

## 🔒 **Security:**
- ✅ **HTTPS** enabled by Railway
- ✅ **CORS** configured for your domain
- ✅ **Live Stripe key** securely deployed

---

## 🎯 **Ready to Accept Live Payments!**

Your ASAP Ticketing system will now process real payments and receive money in your Stripe account!

