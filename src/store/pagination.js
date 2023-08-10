import {defineStore} from "pinia";
import api from "../lib/api.js";

export const paginationStore = defineStore('pagination', {
    state: () => {
        return {
            allPosts: [],
            currentPage: 1,
            itemsPerPage: 8,
        }
    },
    getters: {
        pages() {
            const container = []
            const allPageMap = this.allPosts.map(el => el).reverse()
            while (allPageMap.length > 0) {
                container.push(allPageMap.splice(0, this.itemsPerPage))
            }
            return container
        }
    },

    actions: {
        getPosts() {
            api().getFeed().then(response => {
                this.allPosts = response
            })
        },

        changePage(page) {
            this.currentPage = page
        }
    }

})