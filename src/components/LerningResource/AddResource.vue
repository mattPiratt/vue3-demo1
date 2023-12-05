<template>
  <base-dialog
    v-if="inputIsInvalid"
    title="Validation warining"
    @closeDialog="closeDialog"
  >
    <template #default>
      <p>Please make sure all fields are not empty.</p>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="handleSubmit">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleRef" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="descriptionRef"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkRef" />
      </div>
      <div>
        <base-button type="submit">Add resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    handleSubmit() {
      if (
        this.$refs.titleRef.value.trim() == '' ||
        this.$refs.descriptionRef.value.trim() == '' ||
        this.$refs.linkRef.value.trim() == ''
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(
        this.$refs.titleRef.value,
        this.$refs.descriptionRef.value,
        this.$refs.linkRef.value
      );
      this.$refs.titleRef.value = '';
      this.$refs.descriptionRef.value = '';
      this.$refs.linkRef.value = '';
    },
    closeDialog() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
