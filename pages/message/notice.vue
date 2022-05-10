<template>
  <div class="ps-blog">
    <div class="container">
      <breadcrumb :dataList="breadcrumb"/>
      <h1 class="ps-blog__title">공지사항</h1>
      <div class="ps-blog__content">
        <div class="row">
          <div class="col-12">
            <div class="ps-blog--sidebar">
              <coin-message-list v-for="(item, index) in messageList" :key="index" :item="item"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import CoinMessageList from '~/components/elements/commons/CoinMessageList';
import {mapState} from 'vuex';

export default {
  layout: 'coin',
  components: {
    Breadcrumb,
    CoinMessageList
  },
  data() {
    return {
      dialog: false,
      breadcrumb: [
        {
          url: '/coin/uniMining',
          text: 'Home'
        },
        {
          url: '/message/main',
          text: '메세지'
        },
        {
          url: '/message/notice',
          text: '공지사항'
        }
      ],
      messageList: [
        {
          created_at: '2020.01.01',
          register: 'idididi',
          id: 1,
          short_description: '약식',

        }
      ],
    };
  },
  computed: {
    ...mapState({
      loading: state => state.app.loading
    })
  },
  async mounted() {
    this.$store.commit('app/setLoading', true);
  },
};
</script>
