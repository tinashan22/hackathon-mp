// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // canIUseGetUserProfile: false,
    // canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  onLoad: function(){
    console.log(3333)
  },

  userInfoHandler: function(userInfo) {
    const self = this
    wx.BaaS.auth.loginWithWechat(userInfo).then(
      (res) => {
        console.log('res',res)
        self.setData({
            currentUser: res
        })
        wx.setStorageSync('userInfo', res)
      }, (err) => {
        console.log('err',err)
      }
    )
    wx.navigateTo({
      url: '/pages/menu/menu',
    })
  }

  // onGotUserInfo: function(e) {
  //   wx.navigateTo({
  //     url: '/pages/menu/menu',
  //   })}
  //   userInfoHandler: functio (userInfo) {
  //     const self = this
  //     wx.BaaS.auth.loginWithWechat(userInfo).then(
  //       (res) => {
  //         console.log('res',res)
  //         self.setData({
  //             currentUser: res
  //         })
  //         wx.setStorageSync('userInfo', res)
  //       }, (err) => {
  //         console.log('err',err)
  //       }
  //     )
  //   }
  // },

  // bindTap: function (e) {
  //   console.log(e)
  //   // wx.navigateTo({
  //   //   url: 'pages/menu/menu',
  //   // });
  // },

  // getUserProfile: fucntion(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    // wx.getUserProfile({
    //   desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //   success: (res) => {
    //     console.log(res)
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // })
  //   console.log(e)
  // },
  // getUserInfo(e) {
  //   // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
  //   console.log(e)
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
