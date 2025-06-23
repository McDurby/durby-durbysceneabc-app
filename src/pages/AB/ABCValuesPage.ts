import { SceneAppPage } from '@grafana/scenes';
import { abcValuesScene } from './ABCValuesScene';
import { prefixRoute } from '../../utils/utils.routing';
import { ROUTES } from '../../constants';

export const abcValuesPage = new SceneAppPage({
  title: 'ABC Values',
  url: prefixRoute(ROUTES.ABCV),
  routePath: ROUTES.ABCV,
  getScene: abcValuesScene,
});
