import React, { forwardRef, useContext } from 'react';
import ThemeContext from '@hzero-front-ui/core/lib/utils/ThemeContext';

const withFormOperate = (WrappedComponent) => {
  const Component = (props, ref) => {
    const { onChange = () => {}, value } = props;
    const { schema, styleCounts } = useContext(ThemeContext);
    const handleChange = (name) => (v) => {
      let _state;
      if (typeof value === 'object' && value !== null) {
        _state = {
          ...props.value,
          [name]: v,
        };
      } else {
        _state = v;
      }
      onChange(_state);
    };
    return (
      <WrappedComponent
        {...props}
        ref={ref}
        value={props.value}
        schema={schema}
        styleCounts={styleCounts}
        handleChange={handleChange}
      />
    );
  };
  return forwardRef(Component);
};

export default withFormOperate;
