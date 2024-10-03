<template>
  <tr>
    <td class="text-center">{{ workitem.id }}</td>
    <td>{{ workitem.identifier }}</td>
    <td>{{ workitem.message }}</td>
    <td class="text-center">{{ $formatDateTime(workitem.expires_at) }}</td>
    <td>
      <dropdown-button
        :label="'Actions'"
        :items="[
          { text: 'Retry', icon: 'bi bi-arrow-clockwise', action: 'retry' },
          { text: 'Fail', icon: 'bi bi-trash', action: 'fail' },
          { text: 'Complete', icon: 'bi bi-check', action: 'complete' }
        ]"
        @item-clicked="triggerAction"
      />
    </td>
  </tr>
</template>

<script>
import DropdownButton from "./DropdownButton.vue";
//import { workitemsApi } from "@/services/automationserver";
//import { useAlertStore } from "@/stores/alertStore";

//const alertStore = useAlertStore();

export default {
  name: "GokdnRow",
  components: {
    DropdownButton
  },
  props: {
    token: {
      type: Object,
      required: true
    }
  },
  methods: {
    triggerAction(action) {
      let status = '';
      return status + action;
      /*if (action === 'retry') status = 'new';
      if (action === 'fail') status = 'failed';
      if (action === 'complete') status = 'completed';

      try {
        workitemsApi.updateWorkItemStatus(this.workitem.id, status);
        alertStore.addAlert({
          type: 'success',
          message: "Item status was updated"
        });
        
        // Emit an event to notify the parent component that the workitem status was updated
        this.$emit('refresh');

      } catch (error) {
        alertStore.addAlert({ type: 'danger', message: error });
      }*/
    }
  }
};
</script>

<style scoped>
/* Add any required styles here */
</style>