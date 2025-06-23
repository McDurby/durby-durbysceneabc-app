import { EmbeddedScene, SceneFlexLayout, SceneFlexItem, PanelBuilders } from '@grafana/scenes';

// const body = PanelBuilders.text().setTitle('ABC Scenes Background').setOption({
//   "HW",
//   {
//     content: "Blah",
//     mode: "markdown"
//   }
// }).build();

export function helloWorldScene() {
  return new EmbeddedScene({
    body: new SceneFlexLayout({
      children: [
        new SceneFlexItem({
          width: '100%',
          height: 300,
          body: PanelBuilders.text().setTitle('ABC Scenes Background').setOption('content', 'TODO: Describe the reasoning behind the ABC and ABC Values examples.').build(),
        }),
      ],
    }),
  });
}
