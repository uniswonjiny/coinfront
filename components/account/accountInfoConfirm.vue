<template>
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <v-card>
        <v-card-title :style="{'color': '#103178', 'justify-content': 'center'}">
          추천인 확인
        </v-card-title>
        <v-card-text>
          <v-simple-table class="mt-2">
            <thead>
              <tr>
                <th class="text-left subtitle-1 font-weight-bold">
                  아이디
                </th>
                <th class="text-left subtitle-1 font-weight-bold">
                  회원명
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-left subtitle-1 font-weight-bold">{{ userId }}</td>
                <td class="text-left subtitle-1 font-weight-bold">{{ userName }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card-text>
        <v-card-text class="text-body font-weight-bold" :style="{'color': '#cf3c3c !important'}">
          위 회원을 추천인으로 설정하시겠습니까?
        </v-card-text>
        <v-card-actions>
          <v-btn
              class="ma-0 pa-0"
              dark
              color="#103178"
              @click="dialog = false"
              block
          >
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: "accountInfoConfirm",
  props: {
    dialog: {
      type: Boolean,
      default: true,
    },
    userId: String,
    userName: String
  }

}
</script>

<style scoped>

</style>