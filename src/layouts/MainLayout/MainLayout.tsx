import React, { ReactElement } from 'react';
import classes from './MainLayout.module.scss';
import classNames from 'classnames';

interface Props {
  children: ReactElement<any, any>;
}

export default function MainLayout(props: Props): JSX.Element {
  const { children } = props;
  return (
    <div className={classNames(classes.main)}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}
