import type { DemoRouteType } from './type/demo.type';

export class OfficialWebsiteApiRoute {
  static Product: DemoRouteType = {
    path: '/demos',
    get: { ids: [] }
  };
}
