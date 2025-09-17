// ASAP Ticketing - Railway Backend 
const express = require('express'); 
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); 
const cors = require('cors'); 
 
const app = express(); 
const PORT = process.env.PORT || 3000; 
 
app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'ASAP Ticketing Backend is running!',
    environment: 'LIVE',
    timestamp: new Date().toISOString()
  });
});
 
app.post('/api/create-payment-intent', async (req, res) => { 
  try { 
    const { amount, currency, metadata, description, receipt_email } = req.body; 
    const paymentIntent = await stripe.paymentIntents.create({ 
      amount: Math.round(amount), 
      currency: currency || 'usd', 
      metadata: { ...metadata, source: 'asap-ticketing' }, 
      description: description || 'ASAP Ticketing Flight Booking', 
      receipt_email: receipt_email 
    }); 
    res.json({ clientSecret: paymentIntent.client_secret, paymentIntentId: paymentIntent.id }); 
  } catch (error) { 
    res.status(500).json({ error: error.message }); 
  } 
}); 
 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
