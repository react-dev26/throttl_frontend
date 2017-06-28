import React from 'react';

import { print } from 'utils';
import { login } from 'components/Authentication';
import SignupBtnHeader from './SignupBtnHeader';
import ActionItem from './ActionItem';
import styles from './styles';

const items = [
  { id: 1, label: <span>motorcycles for sale</span>, action: () => { print('Browse Bikes Clicked'); } },
  { id: 2, label: <span>Sell Your motorcycle</span>, action: () => { print('Sell Your Bikes Clicked'); } },
];
function auth() {
  return (
    login()
  );
}
function ActionList() {
  return (
    <div style={styles.container}>
      {
        items.map(item =>
          <ActionItem key={item.id} label={item.label} action={item.action} />,
        )
      }
      <SignupBtnHeader action={() => { auth(); }} />
    </div>
  );
}

export default ActionList;
