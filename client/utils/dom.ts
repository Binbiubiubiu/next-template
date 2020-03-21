/**
 * 绑定事件
 * @param el 绑定节点
 * @param type 事件类型
 * @param handler 事件回调
 */
export const bindEvent = (el: any, type: string, handler: Function) => {
  if (el.addEventListener) {
    el.addEventListener(type, handler, false);
  } else if (el.attachEvent) {
    el.attachEvent('on' + type, handler);
  } else {
    el['on' + type] = handler;
  }
};

/**
 * 解绑事件
 * @param el 绑定节点
 * @param type 事件类型
 * @param handler 事件回调
 */
export const unbindEvent = (el: any, type: string, handler: Function) => {
  if (el.removeEventListener) {
    el.removeEventListener(type, handler, false);
  } else if (el.detachEvent) {
    el.detachEvent('on' + type, handler);
  } else {
    el['on' + type] = null;
  }
};

/**
 * 获取按键码
 * @param event 事件
 */
export const getCharCode = (event: KeyboardEvent) => {
  return event.charCode || event.keyCode;
};

/**
 * 获取剪切板数据
 * @param event  事件
 */
export const getClipboardText = (event: ClipboardEvent) => {
  return event.clipboardData?.getData('text') || '';
};
