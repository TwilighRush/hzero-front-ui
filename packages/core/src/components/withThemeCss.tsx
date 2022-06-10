import React, { forwardRef } from 'react';
import { addThemeStyle } from '../utils/store/helper';

/**
 * 高阶组件：使用受主题控制的CSS
 * 使用方法举例：
 // 函数调用式
 withThemeCss(props => {
  return css`
    color: red;
  `;
 })(ToWrapComponent)
 
 // 类组件装饰器
 @withThemeCss(css`
  .my-btn {
    color: yellow
  }
 `)
 class MyComponent extends React.Component {
    render() {
      // ...
    }
 }
 * @param styles CSS 片段列表
 * @returns 
 */
export function withThemeCss<P = any>(...styles: any[]) {
  // 组件可以多次渲染，但样式只应该渲染一次
  addThemeStyle(...styles);
  return (WrappedComponent: React.ComponentType<any>) => {
    const FinalComponent = forwardRef((props, ref) => <WrappedComponent {...props} ref={ref} />);
    FinalComponent.displayName = 'WithThemeComponent';
    return FinalComponent as React.ComponentType<P>;
  };
}
