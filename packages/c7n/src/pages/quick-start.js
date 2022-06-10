import React from "react";

import {
  IconDisplayWrapper,
  IconSectionTitle,
  IconSectionWrapper,
  IconTitle,
  IconWrapper,
} from "@hzero-front-ui/cfg/lib/pages/_components/IconDisplay/index.style";
import { Icon } from "choerodon-ui/pro";

const newIcons = [
  "credit-platform",
  "interface-management",
  "cloud-service",
  "expert-library",
  "cloud-partner",
  "data-platform",
  "notice",
  "import-meau",
  "cloud-management",
  "workflow",
  "quality-business",
  "governance-platform",
  "purchase",
  "offer",
  "enterprise-certification",
  "business-settings",
  "finance",
  "commodity-management",
  "store-management",
  "partner",
  "sale",
  "sourcing",
  "history",
  "printer",
  "double-down",
  "double-up",
  "sync",
  "select",
  "upload",
  "download",
  "read",
  "delete-o",
  "double-right",
  "double-left",
  "calendar",
];

const overrideIcons = [
  "check",
  "relation",
  "save",
  "delete",
  "link",
  "filter",
  "search",
  "close",
  "arrow_drop_up",
  "arrow_drop_down",
  "expand_less",
  "expand_more",
  "navigate_before",
  "navigate_next",
  "arrow_back",
  "unfold_more",
  "add_box",
  "add",
  "indeterminate_check_box",
  "more_vert",
  "revocation",
  "schedule",
  "recover",
  "mode_edit",
  "settings",
  "repeat",
  "refresh",
  "visibility",
  "layers",
  "open_in_new",
  "flash_on",
  "get_app",
  "link2",
  "publish",
  "publish2",
  "visibility_off",
];

export default () => {
  return (
    <>
      <div>
        <IconDisplayWrapper className="icon-container" style={{ height: 500 }}>
          <IconSectionTitle>新增Icon</IconSectionTitle>
          <IconSectionWrapper>
            {newIcons.map(v => (
              <IconWrapper key={v}>
                <Icon type={v} style={{ fontSize: 24 }} />
                <IconTitle>{v}</IconTitle>
              </IconWrapper>
            ))}
          </IconSectionWrapper>
        </IconDisplayWrapper>
        <IconDisplayWrapper className="icon-container" style={{ height: 500 }}>
          <IconSectionTitle>覆盖Icon</IconSectionTitle>
          <IconSectionWrapper>
            {overrideIcons.map(v => (
              <IconWrapper key={v}>
                <Icon type={v} style={{ fontSize: 24 }} />
                <IconTitle>{v}</IconTitle>
              </IconWrapper>
            ))}
          </IconSectionWrapper>
        </IconDisplayWrapper>
      </div>
    </>
  );
};
