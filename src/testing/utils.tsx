import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { themeConfig, ThemeProvider } from '@orfium/ictinus';
import { render } from '@testing-library/react';

const customRender = (children: JSX.Element) => {
  return render(
    <EmotionThemeProvider theme={themeConfig('semantic')}>
      <ThemeProvider>{children}</ThemeProvider>
    </EmotionThemeProvider>
  );
};

export * from '@testing-library/react';
export { customRender };
