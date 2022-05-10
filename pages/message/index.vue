<template>
  <div class="ps-blog">
    <div class="container">
      <breadcrumb :dataList="breadcrumb"/>
      <h1 class="ps-blog__title">공지사항</h1>
      <div class="ps-blog__content">
        <div class="row">
          <div class="col-12">
            <v-list
                flat
                subheader
                three-line
            >
              <v-list-item-group
                  multiple
                  active-class="pink--text"
              >
                <template v-for="(item, index) in list">
                  <v-list-item @click="selectMessage(item.no)">
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title class="text-h5">

                          {{ item.title }}
                        </v-list-item-title>
                        <v-list-item-subtitle> {{
                            item.created_at
                          }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-icon
                            color="grey lighten-1"
                            v-if="item.saw_flag === 1"
                        >
                          mdi-message-outline
                        </v-icon>

                        <v-chip
                            v-else
                            class="ma-2"
                            color="red"
                            text-color="white"
                            small
                        >
                          NEW
                        </v-chip>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                  <v-divider/>
                </template>
              </v-list-item-group>
            </v-list>
          </div>
        </div>
      </div>
    </div>

    <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
    >
      <v-card color="deep-purple lighten-5">
        <v-card-text class="text-center text-h5 font-weight-black py-3">
          {{ this.dialogInfo ? this.dialogInfo.title : '' }}
        </v-card-text>
        <v-card-text class="text-center">{{ this.dialogInfo ? this.dialogInfo.content : '' }}</v-card-text>
        <v-card-actions>
          <v-btn
              block
              @click="confirmEvent"
          >
            {{ this.dialogInfo && this.dialogInfo.saw_flag === 0 ? '확인' : '닫기' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      dialogInfo: null,
      breadcrumb: [
        {
          url: '/coin/uniMining',
          text: 'Home'
        },
        {
          url: '/message',
          text: '메세지'
        },
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
      loading: state => state.app.loading,
      list: state => state.auth.noticeList
    })
  },
  async mounted() {
    this.$store.commit('app/setLoading', true);
  },
  methods: {
    selectMessage(index) {
      console.log(index)
      this.dialogInfo = this.list.filter(item => item.no == index)[0];
      this.dialog = true;
    },
    confirmEvent() {
      if (this.dialogInfo && this.dialogInfo.saw_flag === 0) {
        this.$store.dispatch('auth/messageListSaw', this.dialogInfo.no)
            .then(_ => {
                  this.dialog = false
                  this.$store.dispatch('auth/fetchMessageList');
                }
            )
      } else {
        this.dialog = false
      }
    }
  }
};
</script>
