<script lang="ts">
import { CreateElement, RenderContext } from 'vue';
import { Vue } from 'vue-property-decorator';

export default Vue.extend({
  data() {
    return { hasError: null, component: null };
  },
  props: {
    fallback: {
      type: Object,
      required: true,
    },
  },
  errorCaptured(err) {
    this.hasError = true;
    console.log('captured', err);
    this.$emit('error-captured', { err });
  },
  render(createElement: CreateElement) {
    if (this.hasError) {
      return createElement(this.fallback);
    }
    return this.$slots.default;
  },
});
</script>
