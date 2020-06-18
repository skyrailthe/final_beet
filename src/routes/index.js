
const error = {
  template: `<h1 class="text-danger">Some thing went wrong. Try to refresh the page. And relogin!</h1>`,
  render() {
    $('body').html(this.template);
  }
}


/*
  @type {object} - routes component
  @result - handle section changes
*/

export default {
  routes: {
    error,
  },

  /*
    @params {string} - route name of component to render
    @result - change main section.
  */

  goTo(route) {
    try {
      this.routes[route].render();
    } catch (error) {
      this.goTo('error');
      console.error(error);
    }
  }
}