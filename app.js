Vue.use(vuelidate.default);

// const pizzaOrBurger = value => value === 'pizza' || value === 'burger' || !validators.helpers.req(value)
// const oldEnoughAndAlive = validators.between(12, 120)

new Vue({
  el: '#app',

  data () {
    return {
      form: {
        name: null,
        age: null,
      }
    }
  },

  validations: {
    form: {
      name: {
        required: validators.required,
      },

      age: {
        required: validators.required,
        integer: validators.integer,
        between: validators.between(12, 120),
        // min: validations.min(12),
        // max: validations.max(120),
      }
    }
  },

  methods: {
    submitForm () {

      // this.$v.form.name.$touch();
      // this.$v.form.age.$touch();

      this.$v.form.$touch();
      // this.$v.$touch();

      if (!this.$v.form.$invalid) {
        console.log('📝 Form Submitted', this.form)
      } else {
        console.log('❌ Invalid form')
      }
    }
  }
})
