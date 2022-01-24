<template>
  <v-dialog v-model="dialog"  max-width="500">
        <v-card flat class="my-auto">
            <v-app-bar flat dense dark color="#103178">
                비밀번호변경
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
                            <v-list-item-title>기존비밀번호 입력</v-list-item-title>
                            <v-list-item-subtitle>
                                <v-text-field
                                    label="영문 숫자 사용가능 6~12자"
                                    filled
                                    clearable
                                    dense
                                    single-line
                                    hint="영문 숫자 사용가능 최소 6자 최대 16자"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show1 ? 'text' : 'password'"
                                    @click:append="show1 = !show1"
                                    :rules="[rules.countMatch]"
                                ></v-text-field>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>신규 비밀번호 입력</v-list-item-title>
                            <v-list-item-subtitle>
                                <v-text-field
                                    label="영문 숫자 사용가능 6~16자"
                                    filled
                                    clearable
                                    dense
                                    single-line
                                    v-model="newPassword1"
                                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                    hint="영문 숫자 사용가능 최소 6자 최대 16자"
                                    :type="show2 ? 'text' : 'password'"
                                    @click:append="show2 = !show2"
                                    :rules="[rules.countMatch]"
                                ></v-text-field>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>신규 비밀번호 재입력</v-list-item-title>
                            <v-list-item-subtitle>
                                <v-text-field
                                    label="영문 숫자 사용가능 6~12자"
                                    filled
                                    clearable
                                    dense
                                    single-line
                                    v-model="newPassword2"
                                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                    hint="영문 숫자 사용가능 최소 6자 최대 12자"
                                    :type="show3 ? 'text' : 'password'"
                                    @click:append="show3 = !show3"
                                    :rules="[rules.countMatch , rules.passwordMatch]"
                                ></v-text-field>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="primary" x-large block @click="cashDialog=true">
                        [<v-icon left>
                            mdi-pencil
                        </v-icon> 변경 ]
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
    return {
        show1: false,
        show2: false,
        password: null,
        newPassword1: null,
        newPassword2: null,
        rules: {
            passwordMatch: ()=> this.newPassword1 == this.newPassword2 || '신규비밀번호와 일치하지 않습니다.',
            countMatch: val => (val && val.length > 5 && val.length < 17) || '최소 6자리 최대 16자리를 입력하세요'
        }
    }
  },
  methods: {
    closeEvent(){
      $emit('closeEvent', 'false')
    }
  }
}
</script>

<style>

</style>