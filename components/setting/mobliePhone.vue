<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card flat class="my-auto">
      <v-app-bar flat dense dark color="#00605a">
        휴대폰번호 변경 - 본인인증대가능
        <v-spacer/>
        <v-btn
            color="white"
            icon
            @click="dialog=false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-app-bar>
      <v-card-text>
        <v-list class="mt-5">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>기존휴대폰번호 입력</v-list-item-title>
              <v-list-item-subtitle>
                <v-text-field
                    label="휴대폰번호입력"
                    filled
                    clearable
                    dense
                    single-line
                ></v-text-field>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>신규 휴대폰번호 입력</v-list-item-title>
              <v-list-item-subtitle>
                <v-text-field
                    label="휴대폰번호입력"
                    filled
                    clearable
                    dense
                    single-line
                ></v-text-field>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>신규 비밀번호 재입력</v-list-item-title>
              <v-list-item-subtitle>
                <v-text-field
                    label="휴대폰번호입력"
                    filled
                    clearable
                    dense
                    single-line
                ></v-text-field>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="success" x-large block @click="cashDialog=true">
          [
          <v-icon left>
            mdi-pencil
          </v-icon>
          변경 ]
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean
  },
  data() {
    return {}
  },
  methods: {
    closeEvent() {
      $emit('closeEvent', 'false')
    }
  }
}
</script>

<style>

</style>
