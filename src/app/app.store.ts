import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';

import { ViewEnum } from './app.enum';
import { View } from './app.type';


export namespace Selector {
  export const SLICE_STATE = 'app';
  const getFeatureSliceStore = createFeatureSelector<State.Type>(SLICE_STATE);

  export const isGridView = createSelector(getFeatureSliceStore, ({ view }: State.Type) => view === ViewEnum.GRID);
  export const isListView = createSelector(getFeatureSliceStore, ({ view }: State.Type) => view === ViewEnum.LIST);
  export const isMenuOpen = createSelector(getFeatureSliceStore, ({ isMenuOpen }: State.Type) => isMenuOpen);
}

export namespace State {
  export const INITIAL: Type = {
    isMenuOpen: false,
    view: ViewEnum.LIST
  };

  export type Type = {
    isMenuOpen: boolean;
    view: ViewEnum;
  };
}


export namespace Action {
  export const toggleMenu = createAction('[App] Toggle Menu');
  export const selectView = createAction('[App] Select View', props<View>());
}


export namespace Reducer {
  export const reducer = createReducer(State.INITIAL,
    on(Action.toggleMenu,
      (appState: State.Type) =>
        ({
          ...appState,
          isMenuOpen: !appState.isMenuOpen
        })
    ),
    on(Action.selectView,
      (appState: State.Type, { mode }: View) =>
        ({
          ...appState,
          view: mode
        })
    )
  );
}
