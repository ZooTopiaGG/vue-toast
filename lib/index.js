var Toast = {}
Toast.install = function (Vue, options) {
  let opt = {
    defaultType: 'top',
    defaultAnimationType: 'fadeInDown',
    defaultDuration: '3000'
  }
  for (var prop in options) {
    opt[prop] = options[prop]
  }
  // 4. 添加实例方法
  Vue.prototype.$toast = function (tips, {
    type,
    animationType,
    duration
  }) {
    // 逻辑...
    if (type) {
      opt['defaultType'] = type
    }
    if (animationType) {
      opt['defaultAnimationType'] = animationType
    }
    if (duration) {
      opt['defaultDuration'] = duration
    }
    if (document.querySelectorAll('.vue-toast').length > 0) {
      return
    }
    let toastTpl = Vue.extend({
      template: `<div class="vue-toast toast-${opt['defaultType']} toast-${opt['defaultAnimationType']}">${tips}</div>`
    })
    let tpl = new toastTpl().$mount().$el;
    document.body.appendChild(tpl)
    setTimeout(() => {
      document.body.removeChild(tpl)
    }, opt['defaultDuration'])
  }
  // let pos = ['bottom', 'center', 'top']
  // pos.forEach(type => {
  //   Vue.prototype.$toast[type] = (tips) => {
  //     return Vue.prototype.$toast(tips, type)
  //   }
  // })
}

module.exports = Toast;
// export default Toast