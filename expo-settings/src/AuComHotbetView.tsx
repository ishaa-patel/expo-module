import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { AuComHotbetViewProps } from './AuComHotbet.types';

const NativeView: React.ComponentType<AuComHotbetViewProps> =
  requireNativeViewManager('AuComHotbet');

export default function AuComHotbetView(props: AuComHotbetViewProps) {
  return <NativeView {...props} />;
}
