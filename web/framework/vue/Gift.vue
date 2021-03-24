<template>
  <div class="gift-container">
    <div class="header">
      <van-nav-bar title="我的礼包" left-arrow @click-left="goBack()" />
    </div>
    <div class="content" :class="{'content-active': activeCss}">
      <div class="inner-content">
        <div class="item marked-msg-row">{{ statusLabels[statusCode].markedMsg }}</div>
        <div class="item msg-row">{{ statusLabels[statusCode].msg }}</div>
        <div class="item btn-row">
          <button @click="linkTo" class="confirm-btn">{{ statusLabels[statusCode].btnValue }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar, Toast } from 'vant';

Vue.use(NavBar).use(Toast);
const BANYUAN_BASE_URL = 'https://m.banyuan.club';
const statusLabels = {
  invalid: {
    markedMsg: '',
    msg: '',
    btnValue: '',
    link: '',
  },
  incompleted: {
    markedMsg: '完善个人资料',
    msg: '领取生日好礼',
    btnValue: '去完善',
    link: `${BANYUAN_BASE_URL}/user/userInfo`,
  },
  non_birth_month: {
    markedMsg: '生日当月开启礼包',
    msg: '先看看其他好礼',
    btnValue: '去领券中心',
    link: `${BANYUAN_BASE_URL}/event/couponCenter/mainCenter/index?utm_source=huiyuanclub&utm_medium=couponcenter`,
  },
  can_receive: {
    markedMsg: '',
    msg: '',
    btnValue: '一键领取',
    link: '/member/receiveBirthdayPkg',
  },
  has_received: {
    markedMsg: '',
    msg: '',
    btnValue: '已领取，去查看优惠券',
    link: `${BANYUAN_BASE_URL}/usercenter/couponCode`,
  },
};

export default {
  name: 'Gift',
  data() {
    return {
      statusCode: 'invalid',
      statusLabels,
    };
  },
  mounted() {
    this.checkBirthdayGift();
  },
  computed: {
    activeCss() {
      let val = false;
      if (this.statusCode === 'can_receive' || this.status === 'has_received') {
        val = true;
      }
      return val;
    },
  },
  methods: {
    async checkBirthdayGift() {
      // 生日检查
      const rawResp0 = await this.$http.get('/member/queryById');
      const { birthday } = rawResp0.data.data;
      if (birthday) {
        const birthMonth = parseInt((birthday.split('-'))[1], 0);
        const currMonth = (new Date()).getMonth() + 1;
        if (!birthMonth) { // 不合法的日期字符串.
          this.statusCode = 'incompleted';
        } else {
          if (birthMonth === currMonth) { // 检验是否领取了生日礼包.
            const rawResp = await this.$http.get('/member/birthdayPkgAvaliable');
            const resp = rawResp.data;
            if (!resp.success) {
              this.statusCode = 'invalid';
            } else {
              const { data } = resp;
              if (data.success) {
                this.statusCode = 'can_receive';
              } else {
                this.statusCode = 'has_received';
                if (data.errorCode === 10021) { // 已过会员生日月未领取
                } else if (data.errorCode === 10009) { // 不满足活动资源设置的发放数量条件！(潜台词是：已经领取过了)
                }
              }
            }
          } else {
            this.statusCode = 'non_birth_month';
          }
        }
      } else {
        this.statusCode = 'incompleted';
      }
    },
    goBack() {
      window.location.href = '/index';
    },
    async linkTo() {
      const statusInfo = this.statusLabels[this.statusCode];
      if (statusInfo.link) {
        if (this.statusCode === 'can_receive') {
          const rawResp = await this.$http.get(statusInfo.link);
          const resp = rawResp.data;
          if (resp.success) {
            this.statusCode = 'has_received';
            Toast('领取成功');
          } else {
            Toast(`领取失败：${resp.message}`);
          }
        } else {
          window.location.href = statusInfo.link;
        }
      }
    },
  },
};
</script>
<style lang="scss">
html body {
  background-color: rgb(250, 212, 157);
  height: 100%;
}
.gift-container {
  .header {
    display: none;
    position: sticky;
    top: 0px;
    background: #fff;
    z-index: 999;
  }
  .content {
    overflow: auto;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: calc(100vh - 46px);
    background: #FAD49D url('../assets/images/bg.jpg') no-repeat fixed top;
    background-size: cover;
    .inner-content {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 4%;
      width: 100%;
      .item {
        text-align: center;
      }
      .marked-msg-row {
        font-family: PingFangSC-Medium;
        color: #B7552A;
        font-size: 24px;
      }
      .msg-row {
        font-family: PingFangSC-Light;
        color: #B7552A;
        font-size: 18px;
      }
      .btn-row {
        margin-top: 10px;
      }
    }
  }

  .content-active {
    background: #FAD49D url('../assets/images/bg_active.jpg') no-repeat fixed top;
    background-size: cover;
    .inner-content {
      bottom: 5%;
    }
  }

  .footer {
    padding: 0px 16px;
    box-sizing: border-box;
    border-top: 1px solid #f9f9f9;
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0px;
    background: #fff;
    z-index: 999;
    .status {
      font-weight: bold;
    }
  }
  .confirm-btn {
    border: 0;
    width: 80%;
    max-width: 321px;
    height: 50px;
    background-image: linear-gradient(90deg, #FC6D37 0%, #F71D55 100%);
    border-radius: 25px;
    border-radius: 25px;
    font-size: 20px;
    color: #FFECC2;
    font-family: PingFangSC-Medium;
  }
}
</style>
