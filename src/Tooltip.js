import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

export default function Tooltips() {
  return (
    <Tooltip title="Add" interactive>
      <Button>Interactivbe</Button>
    </Tooltip>
  );
}