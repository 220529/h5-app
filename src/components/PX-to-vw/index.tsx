import React from "react";
import style from "./index.module.less"; // 引入 LESS 模块

function pxToVw(px: number, designWidth = 750) {
  return (px / designWidth) * 100 + "vw";
}

const CssModules: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <span className={style.text}>消息通知</span>
        <img
          className={style.right}
          src="https://lagou-zhaopin-fe.lagou.com/activities/20240815/1723708196198.png"
        />
      </div>
      <div style={{ fontSize: pxToVw(parseInt("32PX")) }}>我是style</div>
      <div className={style.exit}>退出当前账号</div>
    </div>
  );
};

export default CssModules;
