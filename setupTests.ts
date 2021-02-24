// optional: configure or set up a testing framework before each test
// if you delete this file, remove `setupFilesAfterEnv` from `jest.config.ts`

// used for __tests__/testing-library.js
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { API } from 'services'
import { assets } from 'mock-data'
import { mockResponse } from 'services/test-utils'

Date.now = jest.fn().mockReturnValue(1613378624457)

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: {
        page: 2
      },
      asPath: '',
      push: jest.fn((href: string) => Promise.resolve(href))
    }
  }
}))

jest.spyOn(API, 'getAssets').mockReturnValueOnce(mockResponse(assets))
