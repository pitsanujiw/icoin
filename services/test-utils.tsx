import { AxiosResponse } from 'axios'
import { Provider } from 'react-redux'
import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core'
import { useTheme } from 'components'
import React, { ReactElement } from 'react'
import Store from 'states'

const Providers = ({ children }) => {
  const theme = useTheme()

  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  )
}

const mockResponse = <T,>(data: T): Promise<AxiosResponse<T>> =>
  Promise.resolve({
    status: 200,
    data,
    statusText: 'success',
    headers: {},
    config: {}
  })

const customRender = (ui: ReactElement, options = {}): RenderResult =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender, mockResponse }
