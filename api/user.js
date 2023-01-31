import { getLoginSession } from "../../lib/auth";
import { findUser } from "../../lib/user";

export default async function user(req, res) {
  try {
    const session = await getLoginSession(req);
    const userName = session.dataValues.userName;
    const [User] = (session && (await findUser(userName))) ?? null;
    res.status(200).json({ User });
  } catch (error) {
    console.log(error);
    res.status(500).end("Authentication token is invalid");
  }
}
