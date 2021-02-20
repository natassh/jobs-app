import { render } from '@testing-library/react';
import App from './App';


describe('App', () => {
  window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addEventListener : function() {},
        removeEventListener : function() {}
    };
  };
  

  it('should find the button in the doc', () => {
    const { getByTestId } = render(<App />);
    const element = getByTestId("loadingSpin");

    expect(element).toBeInTheDocument();

  });
})