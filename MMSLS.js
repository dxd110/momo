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
    
    "https://www.maimemo.com/share/page?uid=24921597&pid=cf2908aca3f8357f701384ad1678328f&tid=1417de931ece23f0f18d9c800fe1a7d9",
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
