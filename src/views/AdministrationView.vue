<template>
    <div>
        <tokens-table :tokens="tokens" />
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