/**
 * Handler for Home
 *
 * @author Utkarsh Mishra <utkarsh@fun4js.com>
 */

import { IRequest, IResponse } from "../interfaces/vendors";

class Home {
  public static index(req: IRequest, res: IResponse, next): void {
    res.render("pages/home", {
      title: "Home"
    });
  }
}

export default Home;
