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
                      <v-list-item-title class="text-h5"> {{ item.title }}</v-list-item-title>
                      <v-list-item-subtitle>({{ item.saw_flag === 1 ? '확인' : '미확인' }}) {{
                          item.created_at
                        }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-icon
                          color="grey lighten-1"
                      >
                        mdi-message-outline
                      </v-icon>
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
      <v-card>
        <v-card-title class="text-h5">
          {{ this.dialogInfo ? this.dialogInfo.title : '' }}
        </v-card-title>
        <v-card-text>{{ this.dialogInfo ? this.dialogInfo.content : '' }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="green darken-1"
              text
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
      dialogInfo : null,
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
    selectMessage(index){
      console.log(index)
      this.dialogInfo = this.list.filter(item=> item.no == index)[0];
      this.dialog = true;
    },
    confirmEvent(){
      if(this.dialogInfo && this.dialogInfo.saw_flag === 0){
        this.$store.dispatch('auth/messageListSaw',this.dialogInfo.no )
            .then(_=> this.dialog=false)
      } else {
        this.dialog=false
      }
    }
  }
};
</script>
