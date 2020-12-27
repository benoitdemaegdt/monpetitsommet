export default {
  data: () => ({
    breakpoints: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  }),
  computed: {
    isMobile () {
      if (process.client) {
        return window.innerWidth < this.breakpoints.lg
      }
      return false
    }
  }
}
