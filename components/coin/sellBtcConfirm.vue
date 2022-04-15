<template>
  <v-dialog v-model="dialog">
    <v-card
        max-width="400"
        flat
    >
      <v-app-bar
          flat
          color="rgba(0, 0, 0, 0)"
      >
        <v-icon>
          mdi-chili-mild-outline
        </v-icon>
        출금신청 확인
        <v-spacer/>
        <v-btn
            color="blue"
            icon
            @click="emitEvent(false)"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-app-bar>
      <v-card-subtitle>
        * 출금예정금액
        <small>
          (거래서시세에 따라 다를수 있음)
        </small>
      </v-card-subtitle>
      <v-card-text class="text-center">
        <h3>{{ btcValue }} BTC</h3>
        <div class="subtitle-1"> ({{ money }} 원)</div>
      </v-card-text>
      <v-card-text>
        <v-badge
            color="orange darken-3"
            left
            dot
        >
          <span class="subtitle-2 pl-1" color="red">출금요청을 하시겠습니까?</span>
        </v-badge>
      </v-card-text>
      <v-card-actions class="px-15">
        <v-btn outlined color="primary" @click="emitEvent(false)">아니오</v-btn>
        <v-spacer/>
        <v-btn outlined color="red" @click="emitEvent(true)">출금실행</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "sellBtcConfirm",
  props: {
    dialog: Boolean,
    btcValue: Number,
    money: Number
  },
  methods: {
    emitEvent(flag) {
      this.$emit('emitEvent', false, flag)
    }
  }
}
</script>

<style scoped>

</style>