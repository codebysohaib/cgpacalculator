import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactMessageSchema.parse(req.body);
      // In a real app we would send an email here
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      res.status(400).json({ error: "Invalid form data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
