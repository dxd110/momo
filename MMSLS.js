/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/page?sid=ffb4b0239673bad39dcd9bb6c7898eb7&uid=24921597&pid=646343427bfef88dd286dff8e0c700ca&tid=8881cae3c8a7ffcd605e33833cd1b3d8&view_time=1746884715&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit1id3xLmNpe4tYYn4NzNlhM",
    "https://www.maimemo.com/page?sid=ffb4b0239673bad39dcd9bb6c7898eb7&uid=24921597&pid=646343427bfef88dd286dff8e0c700ca&tid=8881cae3c8a7ffcd605e33833cd1b3d8&view_time=1746884715&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit1id3xLmNpe4tYYn4NzNlhM",
    "https://www.maimemo.com/page?sid=ffb4b0239673bad39dcd9bb6c7898eb7&uid=24921597&pid=646343427bfef88dd286dff8e0c700ca&tid=8881cae3c8a7ffcd605e33833cd1b3d8&view_time=1746884715&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit1id3xLmNpe4tYYn4NzNlhM",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=24921597&pid=75c4948ded804df4a33dad40ac3d4c22&tid=cce6c7827d78cfe277c4104dfff3cc8c",
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
