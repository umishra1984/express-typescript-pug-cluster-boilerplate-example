/**
 * Handler for Account
 *
 * @author Utkarsh Mishra <utkarsh@fun4js.com>
 */

import { IRequest, IResponse } from "../interfaces/vendors";

class Account {
  public static index(req: IRequest, res: IResponse): void {
    res.render("pages/dashboard", {
      title: "Home"
    });
  }
}

export default Account;
