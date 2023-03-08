import {CoreTokens} from './core_tokens';

function parseCoreTokens(json: string): CoreTokens {
  return JSON.parse(json);
}

export {parseCoreTokens};
