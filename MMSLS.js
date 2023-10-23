/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=24921597&pid=a3c1365681c503158ca8342a3f28b5c8&tid=91faa9b752769971f80b0f6ec4030c62",
    "https://www.maimemo.com/share/page?uid=24921597&pid=a3c1365681c503158ca8342a3f28b5c8&tid=91faa9b752769971f80b0f6ec4030c62",
    "https://www.maimemo.com/share/page?uid=24921597&pid=a3c1365681c503158ca8342a3f28b5c8&tid=91faa9b752769971f80b0f6ec4030c62",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=24921597&pid=5104099a3f33caa9d125da8a2e8f10ba&tid=62e52e6b07ef7b3f33071ab700fe5910",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
