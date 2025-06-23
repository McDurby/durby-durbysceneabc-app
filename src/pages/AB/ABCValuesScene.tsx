import { PanelBuilders, EmbeddedScene, SceneFlexLayout, SceneFlexItem, SceneTimePicker, SceneRefreshPicker, SceneControlsSpacer, VariableValueSelectors, SceneVariableSet, CustomVariable } from '@grafana/scenes';

const abc = new CustomVariable({
    name: 'abc',
    label: 'ABC',
    query: "A, B, C"
});

const avalues = new CustomVariable({
    name: 'avalues',
    label: "A's",
    query: "A1, A2, A3"
});

const bvalues = new CustomVariable({
    name: 'bvalues',
    label: "B's",
    query: "B1, B2, B3",
    hide: 2,
});

const cvalues = new CustomVariable({
    name: 'cvalues',
    label: "C's",
    query: "C1, C2, C3",
    hide: 2,
});

/**
 * @type {VizPanel}
 */
const panel = PanelBuilders.timeseries().build();

let scene = new EmbeddedScene({
    $variables: new SceneVariableSet({
        variables: [abc, avalues, bvalues, cvalues],
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

// after 2s, change the ab query
// the UI will NOT refresh since CustomVariable is read-only
// How does Grafana Dashboard update the SceneVariableSet to reflect
// the change in the query?
setTimeout(() => {
    console.log("abc:", abc);
    console.log("avalues:", avalues);
    console.log("bvalues:", bvalues);
    console.log("cvalues:", cvalues);
}, 2000);

export function abcValuesScene() {
    return scene;
}
