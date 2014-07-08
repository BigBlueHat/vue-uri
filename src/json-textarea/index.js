module.exports = {
  created: function() {
    this.$watch('content', function () {
      this.$el.value = JSON.stringify(this.content, null, 2);
    });
  },
  methods: {
    parse: function(e) {
      e.targetVM.content = JSON.parse(e.target.value);
    }
  }
}
