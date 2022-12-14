// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";


export default async function handler(req, res) {
  
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db("Autorizaciones");
  const collection = db.collection("Historial");

  const result = await collection.find({}).toArray();

  await client.close();
  res.status(200).json({ data: result })
}
