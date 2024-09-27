import React from "react";
import style from "./index.module.less"; // 引入 LESS 模块

function pxToRem(pxValue: string, designWidth = 750) {
  const px = parseInt(pxValue);
  const rootValue = designWidth / 10; // 和 PostCSS 设置的 rootValue 保持一致
  return `${px / rootValue}rem`;
}

const CssModules: React.FC = () => {
  return (
    <div className={style.container}>
      <div
        className={style.title}
        style={{ fontSize: pxToRem("40px") }}
      >
        要放弃快速招聘的机会吗?
      </div>
      <div className={style.footer}>
        <div className={style.l}>我再想想</div>
        <div className={style.r}>这就下单</div>
      </div>
    </div>
  );
};

export default CssModules;
