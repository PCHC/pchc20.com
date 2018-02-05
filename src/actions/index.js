// Change the navigation expanded state. onlyClose used for navigation links to close but not reopen the mobile menu onclick.
export function toggleNav(onlyClose = false) {
  return {
    type: 'TOGGLE_NAV',
    payload: {
      onlyClose
    }
  }
}
