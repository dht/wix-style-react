import React from 'react';
import PropTypes from 'prop-types';

import { st, classes } from './SkeletonRectangle.st.css';
import { dataHooks, SKIN_COLOR } from './constants';
import Box from '../Box';
import { SkeletonGroupContext } from '../SkeletonGroup';

/** SkeletonRectangle */
class SkeletonRectangle extends React.PureComponent {
  state = {};

  render() {
    const {
      dataHook,
      className,
      height,
      width,
      margin,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
    } = this.props;

    return (
      <SkeletonGroupContext.Consumer>
        {({ skin }) => (
          <div data-hook={dataHook} className={className}>
            <Box
              height={height}
              width={width}
              margin={margin}
              marginLeft={marginLeft}
              marginRight={marginRight}
              marginTop={marginTop}
              marginBottom={marginBottom}
              backgroundColor={SKIN_COLOR[skin]}
              className={st(classes.skeletonRectangleBox, { skin })}
            />
          </div>
        )}
      </SkeletonGroupContext.Consumer>
    );
  }
}

SkeletonRectangle.displayName = 'SkeletonRectangle';

SkeletonRectangle.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Sets the width of the box (pixels) */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Sets the height of the box (pixels) */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Sets margin on all sides.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Sets margin on the top.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Sets margin on the right.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Sets margin on the bottom.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Sets margin on the left.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SkeletonRectangle.defaultProps = { height: '100%', width: '100%' };

export default SkeletonRectangle;
