import { AxiosResponse } from 'axios'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core'
import React, { ReactElement } from 'react'
import Store from 'states'
import Theme from 'styles'

const Providers = ({ children }) => {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </Provider>
  )
}

const mockResponse = <T,>(data: T): Promise<AxiosResponse<T>> => {
  return Promise.resolve({
    status: 200,
    data: data,
    statusText: 'success',
    headers: {},
    config: {}
  })
}

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender, mockResponse }
