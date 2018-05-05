## Fix TypeScript
### Cannot redeclare block-scoped variable 'Vue'
delete
```JS
namespace Vue {
  const axios: AxiosInstance;
}
```
in 'vue-axios/src/index.d.ts'

### Asset Path
change
```JS
exports.defaults = () => ({
  // project deployment base
  baseUrl: './',
})
```
in '@vue/cli-service/lib/options.js/'