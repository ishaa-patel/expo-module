// Import the native module. On web, it will be resolved to AuComHotbet.web.ts
// and on native platforms to AuComHotbet.ts
import AuComHotbetModule from './AuComHotbetModule';

export function hello(): string {
  return AuComHotbetModule.hello();
}
