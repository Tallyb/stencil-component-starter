'use strict';

const { defaults: tsjPreset } = require('ts-jest/presets');

const config = {
    transform: {
        
    },
    transform: {
        //...tsjPreset.transform,
      '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/@stencil/core/testing/jest.preprocessor.js'
    },
    moduleFileExtensions: [
      'ts',
      'tsx',
      'js',
      'json',
      'jsx'
    ],
    testMatch: [
      '**/__tests__/**/*.ts?(x)',
      '**/?(*.)+(spec|test).ts?(x)'
    ],
    testPathIgnorePatterns: [
      '/dist/',
      '/node_modules/',
      '/www/',
      '/bit/'
    ],
    preset: 'jest-puppeteer'
};
module.exports=config;