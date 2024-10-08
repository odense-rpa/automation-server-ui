<template>
    <div>
        <tokens-table :tokens="tokens" />
    </div>
    <div class="mt-4">
        <router-link :to="{ name: 'settings' }" class="btn btn-primary">Configure the frontend</router-link>
    </div>
</template>
<script>
import TokensTable from '@/components/TokensTable.vue';
import { accessTokensApi } from '@/services/automationserver';

export default {
    name: 'AdministrationView',
    components: {
        TokensTable
    },
    data() {
        return {
            tokens: []
            // Define the data here
        }
    },
    async created() {
        this.fetchTokens();
        console.log('Tokens fetched');
    },
    methods: {
        // Define the methods here
        async fetchTokens() {
            this.tokens = await accessTokensApi.getAccessTokens();
        }
    },
}

</script>