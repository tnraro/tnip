import { NextApiHandler } from "next"
import { getIp } from "../../utils/getIp";

const handler: NextApiHandler = (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end();
  }
  const ip = getIp(req);
  if (req.headers.accept === "application/json") {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.json({ ip });
  }
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end(ip);
}

export default handler;