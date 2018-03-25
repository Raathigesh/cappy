import * as React from 'react';
import { Subscribe } from 'unstated';
import CounterContainer from './Store';
import Component from './Component';

export default function QuickImport() {
  return (
    <div>
      <Subscribe to={[CounterContainer]}>
        {(state: CounterContainer) => (
          <div>
            {state.state.components.map((component, i) => {
              return <Component key={i} component={component} />;
            })}
          </div>
        )}
      </Subscribe>
    </div>
  );
}
