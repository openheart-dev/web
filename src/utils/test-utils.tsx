import {render} from '@testing-library/react';

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // Wrap provider(s) here if needed
    wrapper: ({children}) => children,
    ...options,
  });
}

export * from '@testing-library/react';
export {default as userEvent} from '@testing-library/user-event';
// Override render export
export {customRender as render};
