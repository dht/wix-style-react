import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
<<<<<<< HEAD
import css from './ColorPickerConverter.st.css';
=======

import { st, classes } from './ColorPickerConverter.st.css';
>>>>>>> 2ef14b682... chore(*): stylable migration
import ColorPickerConverterViewer from './ColorPickerConverterViewer';
import { safeColor, getRgbOrEmpty } from './utils';

export default class ColorPickerConverterRGB extends React.PureComponent {
  static propTypes = {
    dataHook: PropTypes.string,
    current: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onAdd: PropTypes.func,
  };

  state = getRgbOrEmpty(this.props.current);

  isInputsEmpty() {
    const { r, g, b } = this.state;
    return [r, g, b].every(value => value === '');
  }

  render() {
    const { dataHook } = this.props;
    return (
<<<<<<< HEAD
      <div {...css('root', {}, this.props)} data-hook={dataHook}>
        <div {...css('distribute', {}, this.props)}>
=======
      <div className={st(classes.root)}>
        <div className={classes.distribute}>
>>>>>>> 6aed38481... chore(*): stylable migration
          <Input
            size="small"
            value={this.state.r}
            onChange={e => this.change('r', e)}
            placeholder="R"
            className={classes.distributedItem}
          />
          <Input
            size="small"
            value={this.state.g}
            onChange={e => this.change('g', e)}
            placeholder="G"
            className={classes.distributedItem}
          />
          <Input
            size="small"
            value={this.state.b}
            onChange={e => this.change('b', e)}
            placeholder="B"
            className={classes.distributedItem}
          />
        </div>
        <ColorPickerConverterViewer
          {...this.props}
          color={this.props.current}
        />
      </div>
    );
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState(getRgbOrEmpty(props.current));
  }

  change(part, { target: { value } }) {
    this.setState({ [part]: value }, () => {
      const isMissingData =
        this.state.r === '' || this.state.g === '' || this.state.b === '';
      const _color = safeColor(
        isMissingData && this.props.allowEmpty ? '' : this.state,
        this.props.allowEmpty,
      );
      if (!isMissingData || this.isInputsEmpty()) {
        this.props.onChange(_color);
      }
    });
  }
}
