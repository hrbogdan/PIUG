import { verify } from "jsonwebtoken";
import { HTTP_UNAUTHORIZED_REQUEST } from "../contants/http_status";

export default (req: any, res: any, next: any) => {
  const token = req.header.access_token as string;

  if (!token) {
    return res.status(HTTP_UNAUTHORIZED_REQUEST).send();
  }

  try {
    const decodedUser = verify(token, process.env.JWT_SECRET!);
    req.user = decodedUser;
  } catch (error) {
    res.status(HTTP_UNAUTHORIZED_REQUEST).send();
  }

  return next();
};
