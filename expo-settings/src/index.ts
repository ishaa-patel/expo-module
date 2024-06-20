import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to AuComHotbet.web.ts
// and on native platforms to AuComHotbet.ts
import AuComHotbetModule from './AuComHotbetModule';
import AuComHotbetView from './AuComHotbetView';
import { ChangeEventPayload, AuComHotbetViewProps } from './AuComHotbet.types';

// Get the native constant value.
export const PI = AuComHotbetModule.PI;

export function hello(): string {
  return AuComHotbetModule.hello();
}

export async function setValueAsync(value: string) {
  return await AuComHotbetModule.setValueAsync(value);
}

const emitter = new EventEmitter(AuComHotbetModule ?? NativeModulesProxy.AuComHotbet);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { AuComHotbetView, AuComHotbetViewProps, ChangeEventPayload };
