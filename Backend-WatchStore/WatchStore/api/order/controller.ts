import { Request, Response } from "express";
import { orderService } from "./service";
import Order from "./model";

const { getOrderById, getOrdersByUserId, createOrder, } = orderService;

class OrderController {
  async getOrdersByUserId (req: Request, res: Response) {
    const id = req.params.id;
    try {
      const orders = await getOrdersByUserId(id);
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(400).json({ error: "Orders not found" });
    }
  }
  async getOrderById(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const order = await getOrderById(id);
      return res.status(200).json(order);
    } catch (error) {
      return res.status(400).json({ error: "Order not found" });
    }
  }
  async createOrder(req: Request, res: Response) {
    try {
      const order = await createOrder(req.body);
      return res.status(201).json(order);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
} 

export const orderController = new OrderController();
