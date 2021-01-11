export default {
  filters: {
    booleanToFrench (value) {
      if (!value) { return 'Non' }
      return 'oui'
    }
  }
}
