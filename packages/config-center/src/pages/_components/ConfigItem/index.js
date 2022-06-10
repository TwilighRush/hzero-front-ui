import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'hzero-ui';
import ThemeContext from '@hzero-front-ui/core/lib/utils/ThemeContext';
import { hideConfig } from '../../../utils/constants';

import {
  CheckedIcon,
  ConfigContainer,
  ContentWrapper,
  ItemTitle,
  // ItemTitle,
  ItemWrapper,
  Title,
} from './index.style';
//
const NumberMap = ['样式一', '样式二', '样式三', '样式四'];

/**
 * 配置项组件
 * @param {string | ReactNode} title
 * @param {Array} items
 * @param {number} defaultSelected
 * @param {function} onChange
 * @param simple
 * @param style
 * @param className
 * @param selectable
 * @param disabledItems
 * @param cols
 * @returns {*}
 */
const ConfigItem = ({
  title,
  items,
  defaultSelected,
  onChange,
  // simple,
  style,
  className,
  selectable,
  disabledItems = [],
  cols = 4,
  showTitle,
  name,
}) => {
  const handleSelect = (index, e) => {
    if (Array.from(e.target.classList).some((v) => v.match('ant'))) {
      return;
    }

    if (disabledItems[index]) {
      return;
    }
    onChange(index);
  };
  const { schema } = useContext(ThemeContext);

  return !hideConfig[schema]?.[name] ? (
    <ConfigContainer style={style || {}} className={className || ''}>
      {title && <Title>{title}</Title>}
      <ContentWrapper className="config-content">
        {items.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Col span={24 / cols} className="item-outer-wrapper" key={index}>
            <ItemWrapper
              onClick={(e) => handleSelect(index, e)}
              className={`config-item-wrapper ${index === defaultSelected ? 'selected' : ''} ${
                disabledItems[index] ? 'item-disabled' : ''
              }`}
            >
              {showTitle && <ItemTitle className="config-item-title">{NumberMap[index]}</ItemTitle>}
              {item.render && item.render}
              {defaultSelected === index && selectable && <CheckedIcon className="check-icon" />}
            </ItemWrapper>
            {item.bottomTitle && <p className="bottom-title">{item.bottomTitle}</p>}
          </Col>
        ))}
      </ContentWrapper>
    </ConfigContainer>
  ) : null;
};

ConfigItem.propTypes = {
  title: PropTypes.node,
  items: PropTypes.array,
  onChange: PropTypes.func,
  defaultSelected: PropTypes.number,
  selectable: PropTypes.bool,
  name: PropTypes.string,
};

ConfigItem.defaultProps = {
  title: '',
  items: [],
  onChange: () => {},
  defaultSelected: 0,
  selectable: true,
  name: '',
};

export default ConfigItem;
