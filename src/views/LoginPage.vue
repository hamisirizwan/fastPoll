<script setup>
import { RouterLink } from "vue-router";
import GithubIconVue from "../assets/icons/GithubIcon.vue";
import GoogleIconVue from "../assets/icons/GoogleIcon.vue";
import TwitterIconVue from "../assets/icons/TwitterIcon.vue";
</script>
<template>
  <section class="mx-auto max-w-lg my-16 p-3">
    <div class="text-center">
      <h1 class="text-2xl text-bold">Log in to your account</h1>
      <h1 class="my-2">
        Or
        <RouterLink to="/register"
          ><span class="text-primary mx-2">Create new account</span></RouterLink
        >
      </h1>
    </div>
    <form
      class="
        mx-auto
        max-w-sm
        p-4
        px-8
        mt-12
        space-y-2
        border-t-4 border border-t-primary
        rounded-md
      "
    >
      <div class="space-y-2">
        <label class="block">Email</label>
        <input
          type="email"
          class="
            w-full
            focus:outline-none
            border border-gray-400
            p-1
            rounded-md
            focus:ring-1 focus:ring-primary focus:border-0
          "
        />
      </div>
      <div class="space-y-2">
        <label class="block">Password</label>
        <input
          type="password"
          class="
            w-full
            focus:outline-none
            border border-gray-400
            p-1
            rounded-md
            focus:ring-1 focus:ring-primary focus:border-0
          "
        />
      </div>
      <button class="w-full bg-primary text-white p-2 rounded-md">
        log in
      </button>
      <div>
        <div class="flex justify-center items-center space-x-2">
          <div class="w-full h-[1px] bg-gray-300"></div>
          <p class="shrink-0">or continue with</p>
          <div class="w-full h-[1px] bg-gray-300"></div>
        </div>
        <div class="flex justify-evenly space-x-2 mt-4">
          <div
            class="
              flex
              items-center
              space-x-2
              border border-gray-400
              p-2
              rounded-md
              justify-center
              cursor-pointer
            "
          >
            <GoogleIconVue />
            <p>Google</p>
          </div>
          <div
            class="
              flex
              items-center
              space-x-2
              border border-gray-400
              p-2
              rounded-md
              justify-center
              cursor-pointer
            "
          >
            <GithubIconVue />
            <p>Github</p>
          </div>
          <div
            class="
              flex
              items-center
              space-x-2
              border border-gray-400
              p-2
              rounded-md
              justify-center
              cursor-pointer
            "
          >
            <TwitterIconVue />
            <p>Twitter</p>
          </div>
          <!-- <div>Google</div> -->
        </div>
      </div>
    </form>
  </section>
</template>