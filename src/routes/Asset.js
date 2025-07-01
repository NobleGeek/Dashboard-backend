import express from 'express';
import Asset from '../models/Asset.js';

const router = express.Router();

router.get('/assets', async (req, res) => {
  try {
    const assets = await Asset.find({});

    res.status(200).json({
      success: true,
      count: assets.length,
      data: assets
    });
  } catch (err) {
    console.error('Error fetching assets:', err);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
});

export default router;