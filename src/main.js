var Vue = require('vue')
var URITemplate = require('URIjs/src/URITemplate')

new Vue({
  el: 'body',
  filters: {
    jsonify: {
      read: function(v) {
        return JSON.stringify(v, null, 2);
      },
      write: function(v) {
        return JSON.parse(v);
      }
    }
  },
  data: {
    uritemplate: 'http://example.org/~{username}/{term:1}/{term}{?q*,lang}',
    obj: {username: "rodneyrehm", term: "hello world", q: {a: "mars", b: "jupiter"}, lang: "en"}
  },
  computed: {
    output: function() {
      return URITemplate(this.uritemplate).expand(this.obj);
    }
  }
})
