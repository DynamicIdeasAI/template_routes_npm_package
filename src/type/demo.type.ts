import { BaseRouteType, BaseRequestType } from '@dynamic-ideas/base-types';

interface DemoRouteType extends BaseRouteType {
  get: DemoGetRequestType;
}

interface DemoGetRequestType extends BaseRequestType {
  ids: string[];
}

export type { DemoRouteType, DemoGetRequestType };
