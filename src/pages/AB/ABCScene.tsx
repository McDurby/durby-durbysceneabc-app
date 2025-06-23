import { PanelBuilders, EmbeddedScene, SceneFlexLayout, SceneFlexItem, SceneTimePicker, SceneRefreshPicker, SceneControlsSpacer, VariableValueSelectors, SceneVariableSet, CustomVariable } from '@grafana/scenes';

const abc = new CustomVariable({
    name: "abc",
    label: "ABC",
    query: "A"
});

const panel = PanelBuilders.timeseries().build();

let scene = new EmbeddedScene({
    $variables: new SceneVariableSet({
        variables: [abc],
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
    const title = "ABCScene";
    console.log(`${title} before query:`, abc.state.query);
    abc.setState({
        query: `${abc.state.query}, ${value}`
    });

    console.log(`${title}  after query:`, abc.state.query);
}

setTimeout(() => {
    add("B");
    setTimeout(() => {
        add("C");
    }, 2000);
}, 10000);

export function abcScene() {
    return scene;
}
