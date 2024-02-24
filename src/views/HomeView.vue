<template>
  <div class="home">
    <HelloWorld msg="In progress" />
  </div>
  <Modal></Modal>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Modal
  },
};
</script>
