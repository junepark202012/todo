// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Process a POST request
    console.log(req.body);
  } else {
    res.status(405).send({ message: "Only POST requests are allowed." });
  }
  res.status(200).json({ name: "John Doe" });
}
