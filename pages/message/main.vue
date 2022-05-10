<template>
  <div class="container ">
    <div class="ps-product__content ps-product--detail ">
      <breadcrumb :dataList="breadcrumb"/>
      <div class="ps-product__info  ">
        <div class="ps-footer--top ">
          <div class="container my-10">
            <div class="row">
              <div class="col-12 col-sm-6 ">
                <p class="text-center">
                  <nuxt-link class="ps-footer__link" to="/message/notice"><i class="icon-wallet"></i>공지사항</nuxt-link>
                </p>
              </div>
              <div class="col-12 col-sm-6">
                <p class="text-center">
                  <nuxt-link class="ps-footer__link" to="/message/purchase"><i class="icon-bag2"></i>활동내역</nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';

export default {
  layout: 'coin',
  components: {
    Breadcrumb
  },
  data() {
    return {
      breadcrumb: [
        {
          url: '/coin/uniMining',
          text: 'Home'
        },
        {
          url: '/coin/messageMain',
          text: '메세지'
        }
      ],
    };
  },
};
</script>
