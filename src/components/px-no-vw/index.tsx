import React from "react";
import style from "./index.module.less"; // 引入 LESS 模块

const CssModules: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>学历</div>
      <div className={style.right}>最近投递</div>
    </div>
  );
};

export default CssModules;
