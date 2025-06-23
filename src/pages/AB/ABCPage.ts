import { SceneAppPage } from '@grafana/scenes';
import { abcScene } from './ABCScene';
import { prefixRoute } from '../../utils/utils.routing';
import { ROUTES } from '../../constants';

export const abcPage = new SceneAppPage({
  title: 'ABC',
  url: prefixRoute(ROUTES.ABC),
  routePath: ROUTES.ABC,
  getScene: abcScene,
});
