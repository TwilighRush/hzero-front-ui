import React from "react";
import styled from "styled-components";
import { getMemoizedAssets } from "./util";
import { BlockContainer } from "./index.style";
import SectionTitle from "../_components/SectionTitle";
import ConfigItem from "../_components/ConfigItem";

import loading1 from "../../assets/icons/hezro-loading2.gif";
import loading2 from "../../assets/icons/hezro-loading.gif";
import withFormOperate from "../_components/withFormOperate";
import { schemaName } from "../../utils";

const StyledConfigItem = styled(ConfigItem)``;

const LoadingWrapper = styled.div`
  padding: 12px 0;
  flex: 1;
  display: flex;
  justify-content: center;
  img {
    width: 32px;
    height: 32px;
  }
`;

const loadings = [
  {
    render: (
      <LoadingWrapper>
        <img src={loading1} alt="loading" />
      </LoadingWrapper>
    ),
  },
  {
    render: (
      <LoadingWrapper>
        <img src={loading2} alt="loading" />
      </LoadingWrapper>
    ),
  },
];

@withFormOperate
export default class LoadingConfig extends React.Component {
  getCollapse = getMemoizedAssets(this.props.styleCounts.collapse, "collapse");

  render() {
    const { handleChange, schema, styleCounts, value } = this.props;
    loadings[0].bottomTitle = `${schemaName.get(schema)}模式下，推荐使用该样式`;
    return (
      <BlockContainer id="loading-config">
        <SectionTitle title="加载" titleTail="Loading" />
        <StyledConfigItem
          cols={4}
          items={loadings}
          onChange={handleChange("spin")}
          defaultSelected={value.spin}
        />
        {styleCounts.collapse && (
          <>
            <SectionTitle title="折叠面板" titleTail="Accordion" />
            <ConfigItem
              name="collapse"
              cols={2}
              items={this.getCollapse(schema)}
              defaultSelected={value.collapse}
              onChange={handleChange("collapse")}
            />
          </>
        )}
      </BlockContainer>
    );
  }
}
