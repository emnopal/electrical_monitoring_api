import express from 'express';
import { getAllValue, getHighestData, getLowestData, getValue, getValues } from '../controllers/electricalMonitoringController.js';

const router = express.Router();

router.get(`/value`, getAllValue);
router.get(`/value/:key?`, getValue);
router.get(`/values`, getValues);
router.get(`/value/highest/:key?`, getHighestData);
router.get(`/value/lowest/:key?`, getLowestData);

export default router;
