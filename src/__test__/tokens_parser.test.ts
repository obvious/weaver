import {TokenType} from '../parsers/token_type';
import {parseCoreTokens} from '../parsers/tokens_parser';
import * as path from 'path';
import {readFile} from 'fs/promises';

async function readJson(path: string): Promise<string> {
  return await readFile(path, {
    encoding: 'utf-8',
  });
}

test('parsing core color tokens should work correctly', async () => {
  // given
  const jsonPath = path.join(__dirname, '../../sample_tokens/core.json');
  const expectedColorTokens = {
    black: {
      value: '#000000',
      type: TokenType.Color,
    },
    white: {
      value: '#ffffff',
      type: TokenType.Color,
    },
    red: {
      '100': {
        value: '#fff5f5',
        type: TokenType.Color,
      },
      '200': {
        value: '#fed7d7',
        type: TokenType.Color,
      },
      '300': {
        value: '#feb2b2',
        type: TokenType.Color,
      },
      '400': {
        value: '#fc8181',
        type: TokenType.Color,
      },
      '500': {
        value: '#f56565',
        type: TokenType.Color,
      },
      '600': {
        value: '#e53e3e',
        type: TokenType.Color,
      },
      '700': {
        value: '#c53030',
        type: TokenType.Color,
      },
      '800': {
        value: '#9b2c2c',
        type: TokenType.Color,
      },
      '900': {
        value: '#742a2a',
        type: TokenType.Color,
      },
    },
    purple: {
      '100': {
        value: '#faf5ff',
        type: TokenType.Color,
      },
      '200': {
        value: '#e9d8fd',
        type: TokenType.Color,
      },
      '300': {
        value: '#d6bcfa',
        type: TokenType.Color,
      },
      '400': {
        value: '#b794f4',
        type: TokenType.Color,
      },
      '500': {
        value: '#9f7aea',
        type: TokenType.Color,
      },
      '600': {
        value: '#805ad5',
        type: TokenType.Color,
      },
      '700': {
        value: '#6b46c1',
        type: TokenType.Color,
      },
      '800': {
        value: '#553c9a',
        type: TokenType.Color,
      },
      '900': {
        value: '#44337a',
        type: TokenType.Color,
      },
    },
  };

  // when
  const jsonContents = await readJson(jsonPath);
  const colorTokens = (await parseCoreTokens(jsonContents)).color;

  // then
  expect(colorTokens).toStrictEqual(expectedColorTokens);
});

test('parsing core typography tokens should work correctly', async () => {
  // given
  const jsonPath = path.join(__dirname, '../../sample_tokens/core.json');
  const expectedTypographyTokens = {
    headline1: {
      value: {
        fontSize: '96',
        fontWeight: 'Regular',
        letterSpacing: '-0.015625',
      },
      type: TokenType.Typography,
    },
    body1: {
      value: {
        fontSize: '16',
        fontWeight: 'Regular',
        letterSpacing: '0.03125',
      },
      type: TokenType.Typography,
    },
    button: {
      value: {
        fontSize: '14',
        fontWeight: 'Bold',
        letterSpacing: '0.0892857143',
      },
      type: TokenType.Typography,
    },
  };

  // when
  const jsonContents = await readJson(jsonPath);
  const typographyTokens = (await parseCoreTokens(jsonContents)).typography;

  // then
  expect(typographyTokens).toStrictEqual(expectedTypographyTokens);
});
