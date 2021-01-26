Vue.component('filter-el', {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `<form action="#" class="searchWrap" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <div class="searchBrowse">
                    Browse <i class="fas fa-caret-down"></i>
                </div>            
                <input placeholder="Search for Item..." type="text" class="search-field" v-model="userSearch">
                <button type="submit" >
                    <i class="fas fa-search"></i>
                </button>
            </form>`
})
