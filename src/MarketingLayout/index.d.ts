import * as React from 'react';

export interface MarketingLayoutProps {
  dataHook?: string;
  image?: React.ReactNode;
  imageBackgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  direction?: 'horizontal' | 'vertical';
  inverted?: boolean;
  actions?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export default class MarketingLayout extends React.PureComponent<
  MarketingLayoutProps
> {}
