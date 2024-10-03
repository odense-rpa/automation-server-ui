<template>
    <content-card title="Tokens">
        <template v-slot:header-right>
            <div class="input-group">
                <!--<router-link :to="{ name: 'token.create' }" class="btn btn-success">+</router-link>-->
            </div>
        </template>
        <table class="table table-striped table-hover mb-0 rounded-bottom">
            <thead>
                <tr>
                    <th>Id</th>
                    <th class="text-center">Identifier</th>
                    <th class="text-center">Expires</th>
                    <th class="text-center">Created</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="token in tokens" :key="token.id">
                    <td>{{ token.id }}</td>
                </tr>
                <!-- Use v-for to loop through the workqueues and display the data -->
                <!-- <WorkqueueItem v-for="workqueue in workqueues" :key="workqueue.id" :workqueue="workqueue" />-->
            </tbody>
        </table>
    </content-card>
</template>

<script>
//import WorkqueueItem from '@/components/WorkqueueItem.vue'
import ContentCard from "./ContentCard.vue";

export default {
    name: 'WorkqueuesTable',
    components: {
        ContentCard,
        //      WorkqueueItem
    },
    props: {
        tokens: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
/* Add custom styles for the table if needed */
</style>
