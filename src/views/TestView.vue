<template>
  <div>
    <input type="file" ref="fileInput" @change="handleFileChange">
    <button @click="uploadImage">Upload Image</button>
  </div>
</template>

<script>
const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;
export default {
  data() {
    return {
      selectedFile: null,
      id: "admin" // Set the user ID here, or fetch it dynamically
    };
  },
  methods: {
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    async uploadImage() {
      const formData = new FormData();
      formData.append("image", this.selectedFile);
      const queryParams = new URLSearchParams({ login: this.id }).toString();

      try {
        const response = await fetch(`http://${host}:${port}/api/v1/users/upload?${queryParams}`, {
          method: "POST",
          headers: {
            bearer: localStorage.getItem("authToken")
          },
          body: formData
        });


        if (response.ok) {
          console.log("Image uploaded successfully");
          // Perform any additional actions upon successful upload
        } else {
          console.error("Failed to upload image");
          // Handle error cases
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        // Handle network errors or other exceptions
      }
    }
  }
};
</script>
