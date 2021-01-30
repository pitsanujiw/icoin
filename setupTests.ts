// optional: configure or set up a testing framework before each test
// if you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// used for __tests__/testing-library.js
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { API } from 'services'
import { mockResponse } from 'services/test-utils'
import Globals from 'mock-data/globals.json'

beforeEach(() => {
  jest.spyOn(API, 'getGlobals').mockReturnValueOnce(mockResponse(Globals))
})
