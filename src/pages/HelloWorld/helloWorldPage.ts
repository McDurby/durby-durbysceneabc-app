import { SceneAppPage } from '@grafana/scenes';
import { helloWorldScene } from './helloWorldScene';
import { prefixRoute } from '../../utils/utils.routing';
import { ROUTES } from '../../constants';

export const helloWorldPage = new SceneAppPage({
  title: 'ABC Scenes Background',
  url: prefixRoute(ROUTES.HelloWorld),
  routePath: ROUTES.HelloWorld,
  getScene: helloWorldScene,
});
