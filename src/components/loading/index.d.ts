import { CommonProps } from '../common';

import { FunctionComponent, HTMLAttributes } from 'react';

declare module '@elastic/eui' {
  /**
   * @see './loading_spinner.js'
   */
  export type EuiLoadingSpinnerSize = 's' | 'm' | 'l' | 'xl';

  export type EuiLoadingSpinnerProps = CommonProps &
    HTMLAttributes<HTMLDivElement> & {
      size?: EuiLoadingSpinnerSize;
    };

  export const EuiLoadingSpinner: FunctionComponent<EuiLoadingSpinnerProps>;

  /**
   * @see './loading_chart.js'
   */
  export type EuiLoadingChartSize = 'm' | 'l' | 'xl';

  export type EuiLoadingChartProps = CommonProps &
    HTMLAttributes<HTMLDivElement> & {
      mono?: boolean;
      size?: EuiLoadingChartSize;
    };

  export const EuiLoadingChart: FunctionComponent<EuiLoadingChartProps>;


  /**
   * @see './loading_kibana.js'
   */
  export interface EuiLoadingKibanaProps {
    size: 'm' | 'l' | 'xl';
  }

  export const EuiLoadingKibana: FunctionComponent<
    CommonProps & HTMLAttributes<HTMLDivElement> & EuiLoadingKibanaProps
    >;
}
