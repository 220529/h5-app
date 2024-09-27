import React from "react";
import style from "./index.module.less"; // 引入 LESS 模块

function pxToVw(px: number, designWidth = 750) {
  return (px / designWidth) * 100 + "vw";
}

const CssModules: React.FC = () => {
  return (
    <div className={style.container}>
      <div
        className={style.title}
        style={{ fontSize: pxToVw(parseInt("40PX")) }}
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
