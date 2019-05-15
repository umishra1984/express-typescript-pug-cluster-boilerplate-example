/**
 * Handle all your social auth routesß
 *
 * @author Utkarsh Mishra <utkarsh@fun4js.com>
 */

class Social {
  public static googleCallback(req, res): any {
    return res.redirect("/account");
  }
}

export default Social;
