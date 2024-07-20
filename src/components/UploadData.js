import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import './UploadData.css';

const UploadData = () => {
  const [customerData, setCustomerData] = useState({
    customerID: '',
    gender: '',
    age: '',
    tenure: '',
    balance: '',
    products: '',
    creditScore: '',
    activeMember: '',
  });
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Replace with your API endpoint
      const response = await axios.post('https://your-api-endpoint/predict', customerData);
      setPrediction(response.data.prediction);
    } catch (error) {
      setError('An error occurred while predicting churn. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Upload Data
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Customer ID"
            name="customerID"
            value={customerData.customerID}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Gender"
            name="gender"
            value={customerData.gender}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Age"
            name="age"
            type="number"
            value={customerData.age}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Tenure"
            name="tenure"
            type="number"
            value={customerData.tenure}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Balance"
            name="balance"
            type="number"
            value={customerData.balance}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Products"
            name="products"
            type="number"
            value={customerData.products}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Credit Score"
            name="creditScore"
            type="number"
            value={customerData.creditScore}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Active Member"
            name="activeMember"
            value={customerData.activeMember}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Predict Churn'}
          </Button>
        </form>
        {error && <Typography color="error">{error}</Typography>}
        {prediction !== null && (
          <Typography variant="h5" component="p" sx={{ mt: 2 }}>
            The customer is predicted to: <strong>{prediction}</strong>
          </Typography>
        )}
      </Paper>
    </Box>
  );
}

export default UploadData;
