Vue.component('searchform', {
    props: ['value'],
    template: `
        <form action="#" class="search-form" @submit.prevent="$parent.$emit('filter', value)">
                <input type="text" class="search-field" v-model="userSearch">
                <button type="submit" class="btn-search">
                    <i class="fas fa-search"></i>
                </button>
            </form>
    `
});