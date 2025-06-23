import { PanelBuilders, EmbeddedScene, SceneFlexLayout, SceneFlexItem, SceneTimePicker, SceneRefreshPicker, SceneControlsSpacer, VariableValueSelectors, SceneVariableSet, CustomVariable } from '@grafana/scenes';

const ab = new CustomVariable({
    name: 'ab',
    label: 'ABC',
    query: "A"
});

const panel = PanelBuilders.timeseries().build();

let scene = new EmbeddedScene({
    $variables: new SceneVariableSet({
        variables: [ab],
    }),
    body: new SceneFlexLayout({
        children: [
            new SceneFlexItem({
                body: panel,
            }),
        ],
    }),
    controls: [
        new VariableValueSelectors({}),
        new SceneControlsSpacer(),
        new SceneTimePicker({ hidePicker: false, isOnCanvas: true }),
        new SceneRefreshPicker({ isOnCanvas: true, autoEnabled: true }),
    ],
});

// after 2s, change the abc query
// the UI will NOT refresh since CustomVariable is read-only
// How does Grafana Dashboard update the SceneVariableSet to reflect
// the change in the query?
function add(value: string) {
    console.log("before query:", ab.state.query);
    ab.setState({
        query: `${ab.state.query}, ${value}`
    });

    console.log(" after query:", ab.state.query);
}

setTimeout(() => {
    add("B");
    setTimeout(() => {
        add("C");
    }, 2000);
}, 2000);

export function abcScene() {
    return scene;
}
