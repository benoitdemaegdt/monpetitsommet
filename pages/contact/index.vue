<template>
  <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
    <div class="relative max-w-xl mx-auto">
      <svg
        class="absolute left-full transform translate-x-1/2"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        />
      </svg>
      <svg
        class="absolute right-full bottom-0 transform -translate-x-1/2"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        />
      </svg>
      <div class="text-center">
        <h2
          class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Nous contacter
        </h2>
        <p class="mt-4 text-lg leading-6 text-gray-500">
          Besoin d'une précision ? Vous avez une proposition d'aventure que vous
          voudriez ajouter sur le site ? Laissez-nous un message !
        </p>
      </div>
      <div class="mt-12">
        <form
          name="contact"
          method="POST"
          netlify
          class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          @submit.prevent="handleSubmit()"
        >
          <div>
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-700"
              >Prénom</label
            >
            <div class="mt-1">
              <input
                v-model="firstName"
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                required
                class="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label
              for="last-name"
              class="block text-sm font-medium text-gray-700"
              >Nom</label
            >
            <div class="mt-1">
              <input
                v-model="lastName"
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                required
                class="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <div class="mt-1">
              <input
                v-model="email"
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium text-gray-700"
              >Message</label
            >
            <div class="mt-1">
              <textarea
                v-model="message"
                id="message"
                name="message"
                rows="4"
                required
                class="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <button
              type="submit"
              class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const { firstName, lastName, email, message, handleSubmit } = useContact()
</script>
