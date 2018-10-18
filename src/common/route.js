const homePath = 'main/pages/index';

function back2Home() {
  let tempPages = getCurrentPages();
  // 检测当前页面栈是否有首页,有则返回
  let index = tempPages.findIndex(page => {
    return page.route === homePath;
  });
  if (index >= 0) {
    wx.navigateBack({ delta: index + 1 });
  } else {
    wx.reLaunch({
      url: '/' + homePath
    });
  }
}
/**
 * 返回上级页面
 */
function back(option = 1) {
  if (typeof option === 'number') option = { delta: option };
  wx.navigateBack(option);
}
module.exports = {
  back2Home,
  backPre
};
