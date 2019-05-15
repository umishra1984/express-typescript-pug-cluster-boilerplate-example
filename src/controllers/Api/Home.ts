/**
 * Define the API base url
 *
 * @author Utkarsh Mishra <utkarsh@fun4js.com>
 */

import Locals from "../../providers/Locals";

class Home {
  public static index(req, res, next): any {
    res.json({
      message: Locals.config().name
    });
  }
}

export default Home;
