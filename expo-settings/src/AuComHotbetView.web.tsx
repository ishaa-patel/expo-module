import * as React from 'react';

import { AuComHotbetViewProps } from './AuComHotbet.types';

export default function AuComHotbetView(props: AuComHotbetViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
