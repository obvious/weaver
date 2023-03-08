import {TokenType} from './token_type';

interface CoreColorToken {
  value: string;
  type: TokenType;
}

interface CoreColorTokens {
  [key: string]: CoreColorToken | CoreColorTokens;
}

interface CoreTypographyTokenContents {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  letterSpacing?: string;
  lineHeight?: string;
}

interface CoreTypographyToken {
  value: CoreTypographyTokenContents;
  type: TokenType;
}

interface CoreTypographyTokens {
  [key: string]: CoreTypographyToken;
}

interface CoreTokens {
  color: CoreColorTokens;
  typography: CoreTypographyTokens;
}

export {CoreTokens};
