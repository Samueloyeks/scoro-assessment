<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <Select v-if="!loading" :items="statuses" />
    <p v-if="loading">Loading...</p>
  </div>
</template>

<script lang="ts">
import Select from "./components/Select.vue";
import { Status, BaseData } from "./interfaces/Status";
import { ref } from "vue";

export default {
  components: {
    Select,
  },
  props: [],
  data(): BaseData {
    return {
      loading: true as boolean,
      statuses: [] as Status[],
      test: "test" as string,
    };
  },
  methods: {
    getStatuses() {
      const data = {
        lang: "eng",
        company_account_id: import.meta.env.APP_COMPANY_ACCOUNT_ID,
        apiKey: import.meta.env.APP_USER_TOKEN,
      };

      fetch(`https://homeassignment.scoro.com/api/v2/statuses/list`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          this.loading = false;

          this.statuses = JSON.parse(JSON.stringify(data.data));
        });
    },
  },
  mounted() {
    this.getStatuses();
  },
};
</script>
