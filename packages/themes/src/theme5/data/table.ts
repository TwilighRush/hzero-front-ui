import { css } from 'styled-components';
import { ComponentData } from '@hzero-front-ui/core';
import TableProStyle from '../templates/Table.style';
import TableHzeroStyle from '../templates-hzero/Table.style';

const TableStyle = css`
  ${TableProStyle}
`;

const tableData: ComponentData = {
  name: 'table',
  data: [
    {
      buttonsAlign: 'right', // right | left
      expandColor: 'white !important',
      expandBackground: '#5365EA !important',
      notExpandBackground: 'rgba(15,19,88,0.06) !important',
      notExpandColor: 'rgba(15,19,88,0.65)',
      tableEditBackground: '#f2f5fd',
      checkboxPosition: 'absolute',
      cellInner: 'unset',
      iconCancelTop: '1px',
      iconCancelFontSize: '0.1rem',
      blockMaxWidth: 'calc(100% - .14rem)',
      filterColumnColor: '#0F1358',
      filterPlaceholderColor: '#9EADBE',
      filterPlaceholderFontSize: '0.12rem',
      filterIconColor: '#0F1358',
      filterSelectLinePadding: '0 0.65rem 0 0.5rem',
      fixedCellInnerPadding: '0 0.16rem',
      tableCellInnerSpanFontWeight: '500',
      tableCellInnerBottom: '5px',
      tableCellInnerPadding: '0 0.2rem 0 0.2rem',
      cellPadding: '0px',
      // tableCellInnerHeight: '0.3rem !important',
      bordered: false,
      striped: true,
      stripedBg: `#FAFBFF`,
      borderColor: 'transparent',
      headHeight: 34,
      headBg: '#fff',
      headFontColor: '#7C859B',
      filterChooserOverflow: 'hidden',
      filterChooserButtonRadius: '0px',
      headFontSize: 12,
      titleBorderTop: 0,
      rowHeight: 28,
      highLightRow: false,
      rowUlLineHeight: '0.36rem',
      rowInputHeight: '0.34rem',
      bodyBg: '#fff',
      bodyHoverBg: '#F3F6FE',
      fontSize: 12,
      bodyFontColor: '#1C1C1C',
      expandIconColor: 'rgba(0, 0, 0, .6)',
      expandIconBGColor: '#5365EA',
      expandFontSize: '12px',
      expandContent: '\\E409',
      collapseContent: '\\E5CF',
      expandFontColor: 'white',
      expandRadius: '.03rem',
      editableActiveBorderColor: '#6887E8',
      editableBackgroundColor: 'none',
      tableHeaderBorderColor: '#F3F6FE',
      borderGroupHeaderColor: '#D9E6F2',
      filterContent: '\\E5CD',
      filterColor: '#415BC9',
      filterFontSize: '.12rem',
      filterBoderRadius: '.05rem',
      // filterFontFamily: '',
      filterBackgroundColor: 'rgba(83,101,234,0.08)',
      deleteIcon: '\\ea74',
      editIcon: '\\ea87',
      closeIcon: '\\e5cd',
      checkIcon: '\\e876',
      iconradius: '50%',
      iconBorder: '1px solid rgba(15,19,88,0.08)',
      iconHeight: '.2rem',
      iconWidth: '.2rem',
      iconFontSize: '.12rem',
      iconLineHeight: '.2rem',
      iconVerticalAlicin: 'middle',
      iconBackGround: 'none',
      editIconColor: '#6887E8',
      editIconfontFamily: 'icomoon',
      closeIconColor: '#0F1358',
      closeIconfontFamily: 'icomoon',
      checkIconColor: '#1FC2BB',
      checkIconfontFamily: 'icomoon',
      deleteIconColor: '#FD729C',
      deleteIconfontFamily: 'icomoon',
      confirmIconColor: '#20D489',
      confirmIconfontFamily: 'icomoon',
      cancelIconColor: '#BDC2CD',
      cancelIconfontFamily: 'icomoon',
      formLabelTextAligin: 'right !important',
      fromLabelVerticalAligin: 'middle',
      tableEditorBeforeRadius: '0.02rem',
      filterChooser: '.25rem',
      bodyFontWeight: 'lighter',
      tableEditorborderWidthFocused: 1,
      tableEditorBeforeBorder: '1px solid #6887E8',
      filterSelectInputBorder: 'none',
      filterSelectButtonborder: 'none',
      filterSelectButtonBgColor: 'white',
      filterSelectButtonColor: '#0F1358',
      expandIconPaddingTop: '.01rem',
      currentBordercolor: 'transparent',
      paddingAggregation: 'none',
      paddingAggregationTop: 'none',
      // prefixTop:8
    },
  ],
  onlyTemplate: { pro: TableProStyle, hzero: TableHzeroStyle },
};

export default tableData;
