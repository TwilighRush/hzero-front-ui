import React, { FC, ReactElement } from 'react';
import { Dropdown, Icon, Menu } from "hzero-ui";

export interface TableActionOption {
  key: any,
  text: String,
  icon?: string | ReactElement,
  action?: Function,
  subOptions?: TableActionOption[]
}

export interface TableActionProps {
  options: TableActionOption[],
  overlayTrigger?: ('click' | 'hover' | 'contextMenu')[]
}

const TableAction: FC<TableActionProps> = (props: TableActionProps) => {
  const {options, overlayTrigger} = props;
  const getSubOptionTitle = (option: TableActionOption) => (
    <a>
      {
        typeof option.icon === 'string' ? <Icon type={option.icon} /> : (option.icon || null)
      }
      <span>{option.text}</span>
    </a>
  );
  const getSubMenuItems = (opts: TableActionOption[]) => opts.map(opt => (
    <Menu.Item key={opt.key} onClick={opt.action}>
      {getSubOptionTitle(opt)}
    </Menu.Item>
  ));
  const menu = (
    <Menu>
      {
        options.map(option => (!option.subOptions || !option.subOptions.length) ? (
          <Menu.Item key={option.key} onClick={option.action}>
            {getSubOptionTitle(option)}
          </Menu.Item>
          ) :
          (
            <Menu.SubMenu key={option.key} title={getSubOptionTitle(option)}>
              {getSubMenuItems(option.subOptions || [])}
            </Menu.SubMenu>
          ))
      }
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={overlayTrigger || ['click']}>
      <a className="ant-dropdown-link" href="#">
        <Icon type="operation" style={{fontSize: 16, color: "#5a6677"}} />
      </a>
    </Dropdown>
  );
};

export default TableAction;
