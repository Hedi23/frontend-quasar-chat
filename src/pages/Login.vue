<template>
    <div class="row">
        <div class="col-12 text-center">
            <h4>Log in or signup</h4>
        </div>
        <div class="col-sm-10 offset-sm-1 col-md-6 offset-md-3">
            <div class="row">
                <div class="col-12 q-pa-sm">
                    <q-input
                        v-model="email"
                        float-label="Email"
                        placeholder="Enter Email"
                    />
                </div>
                <div class="col-12 q-pa-sm">
                    <q-input
                        v-model="password"
                        float-label="Password"
                        placeholder="Enter Password"
                    />
                </div>
            </div>
        </div>
        <div class="col-sm-10 offset-sm-1 col-md-6 offset-md-3 q-pt-lg">
            <div class="row">
                <div class="col-6 q-pa-sm">
                    <q-btn  @click="login" label="login" />
                </div>
                <div class="col-6 q-pa-sm">
                    <q-btn @click="signup" label="signup" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>

<script>
export default {
  name: 'PageLogin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('Login')
    },
    signup () {
      console.log('Signup')
    }
  }
}
</script>
