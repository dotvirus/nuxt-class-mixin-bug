import { Vue, Component } from "vue-property-decorator";

@Component
export default class UtilMixin extends Vue {
  isMounted = false;

  mounted() {
    this.isMounted = true;
  }
}
