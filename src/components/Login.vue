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
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'PageLogin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    dismissError () {
      this.error = undefined
      this.clearCreateError()
    },
    login () {
      this.getCredentials()
      this.resetInput()
    },
    signup () {
      this.dismissError()
      const userEmail = this.email
      const userPassword = this.password
      console.log(userEmail)
      console.log(userPassword)
      this.createUser({ email: userEmail, password: userPassword })
        .then(response => {
          console.log(response)
          this.authenticate({strategy: 'local', email: userEmail, password: userPassword})
        })
        // Just use the returned error instead of mapping it from the store.

        .catch(error => {
          // Convert the error to a plain object and add a message.
          console.log(error)
          let type = error.errorType
          error = Object.assign({}, error)
          error.message = (type === 'uniqueViolated')
            ? 'That email address is unavailable.'
            : 'An error prevented signup.'
          this.error = error
        })
      this.resetInput()
    },
    getCredentials () {
      const user = {email: this.email, password: this.password}
      return user
    },
    resetInput () {
      this.email = ''
      this.password = ''
    },
    ...mapActions('users', {
      createUser: 'create'
    }),
    ...mapMutations('users', {
      clearCreateError: 'clearCreateError'
    }),
    ...mapActions('auth', [
      'authenticate'
    ])
  }
}
</script>
