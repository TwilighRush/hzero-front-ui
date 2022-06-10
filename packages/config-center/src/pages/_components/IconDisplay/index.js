import React from "react";

// import { Icon } from "@hzero-front-ui/hzero-ui/lib";
// import 'choerodon-ui/dist/choerodon-ui.css';
import { Icon } from "choerodon-ui";
import "choerodon-ui/lib/icon/style";

import {
  IconDisplayWrapper,
  IconSectionTitle,
  IconSectionWrapper,
  IconTitle,
  IconWrapper,
} from "./index.style";

const menuIcons = [
  "interface-management",
  "business-settings",
  "credit-platform",
  "governance-platform",
  "data-platform",
  "store-management",
  "cloud-management",
  "enterprise-certification",
  "workflow",
  "cloud-service",
  "commodity-management",
  "partner",
  "cloud-partner",
  "notice",
  "expert-library",
  "purchase",
  "offer",
  "sale",
  "import-meau",
  "quality-business",
  "finance",
  "sourcing",
];

const btnIcon = [
  "add",
  "get_app",
  // "export",
  "select",
  "open_in_new",
  "flash_on",
  "recover",
  "sync",
  "relation",
  "check",
  "download",
  "upload",
  "refresh",
  "double-down",
  "double-up",
  "publish",
  "read",
  "revocation",
  "link2",
  "schedule",
  "printer",
  "repeat",
  "history",
  "settings",
  "delete",
  "save",
];

const tableIcons = [
  "unfold_more",
  "filter",
  "mode_edit",
  "publish2",
  "delete",
  "link2",
  "add_box",
  "indeterminate_check_box",
  "more_vert",
];

const otherIcon = [
  "search",
  "close",
  "arrow_back",
  "arrow_drop_down",
  "arrow_drop_up",
  "expand_more",
  "expand_less",
  "visibility",
  "visibility_off",
  "calendar",
  "layers",
  "navigate_next",
  "double-right",
  "navigate_before",
  "double-left",
  // "word",
  // "excel",
  // "ppt",
  // "unknown",
];

export default function IconDisplay() {
  return (
    <IconDisplayWrapper className="icon-container">
      <IconSectionTitle>菜单Icon</IconSectionTitle>
      <IconSectionWrapper>
        {menuIcons.map(v => (
          <IconWrapper key={v}>
            <Icon type={v} style={{ fontSize: 24 }} />
            <IconTitle>{v}</IconTitle>
          </IconWrapper>
        ))}
      </IconSectionWrapper>
      <IconSectionTitle>按钮Icon</IconSectionTitle>
      <IconSectionWrapper>
        {btnIcon.map(v => (
          <IconWrapper key={v}>
            <Icon type={v} style={{ fontSize: 24 }} />
            <IconTitle>{v}</IconTitle>
          </IconWrapper>
        ))}
      </IconSectionWrapper>
      <IconSectionTitle>表格内Icon</IconSectionTitle>
      <IconSectionWrapper>
        {tableIcons.map(v => (
          <IconWrapper key={v}>
            <Icon type={v} style={{ fontSize: 24 }} />
            <IconTitle>{v}</IconTitle>
          </IconWrapper>
        ))}
      </IconSectionWrapper>
      <IconSectionTitle>其它Icon</IconSectionTitle>
      <IconSectionWrapper>
        {otherIcon.map(v => (
          <IconWrapper key={v}>
            <Icon type={v} style={{ fontSize: 24 }} />
            <IconTitle>{v}</IconTitle>
          </IconWrapper>
        ))}
      </IconSectionWrapper>
    </IconDisplayWrapper>
  );
}
