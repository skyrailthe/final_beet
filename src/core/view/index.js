/* 
    @params {object} - set of properties

*/

export const view = (options) => {
    const { id, template, components, events } = options;
    return {
        id,
        events, // ['click|.selector1|cb','change|.selector2|cb']
        $el: '',
        template,
        components,
        render() {
            this.$el = $(this.id);
            this.$el.html(this.template);
            this.showComponents();

            this.bindEvents();

            return this;
        },
        bindEvents() {
            if (Array.isArray(this.events)) {
                this.events.forEach(e => {
                    const [event, selector, cb] = e.split('|');
                    $(selector).on(event, this[cb]);
                });
            }
        },

        showComponents() {
            if (Array.isArray(this.components)) {
                components.forEach(component => {
                    component.render();
                })
            };
        },
    }

};