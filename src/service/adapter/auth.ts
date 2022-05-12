export function userInfoAdapter(res: Service.RequestResult<ApiAuth.Adapter.UserInfoVO>): ApiAuth.UserInfo {
  const { id, name, phone, role } = res.data!;
  const result: ApiAuth.UserInfo = {
    userId: id,
    userName: name,
    userPhone: phone,
    userRole: 'admin'
  };
  return result;
}

export function routeInfoAdapter(res: Service.RequestResult<AuthRoute.Route[]>): ApiRoute.Route {
  const r = res.data!;
  const result: ApiRoute.Route = {
    home: 'dashboard_analysis',
    routes: r
  };
  return result;
}
