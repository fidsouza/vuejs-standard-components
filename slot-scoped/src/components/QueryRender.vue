<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    entity: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    data: null,
    hasError: false,
  }),
  async created() {
    try {
      const response = await this.$services[this.entity][this.action]();
      this.data = response;
    } catch (err) {
      this.hasError = !!err;
    }
  },
  render(h: any) {
    const slot = this.$scopedSlots.default({
      data: this.data,
      hasError: this.hasError,
    });

    return h('div', slot);
  },
});
</script>

<style></style>
