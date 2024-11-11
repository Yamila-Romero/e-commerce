import express from "express";
import { orderController } from "./controller";
const orderRouter = express.Router();

const { getOrdersByUserId, getOrderById, createOrder, } = orderController;

orderRouter.get("/orderHistory/:id", getOrdersByUserId);
orderRouter.get("/:id", getOrderById);
orderRouter.post("/confirmOrder", createOrder);

export default orderRouter;
