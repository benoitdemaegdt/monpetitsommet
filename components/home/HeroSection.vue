<template>
  <div class="relative bg-white overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
      <svg
        class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
        width="640"
        height="784"
        fill="none"
        viewBox="0 0 640 784"
      >
        <defs>
          <pattern
            id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
            x="118"
            y="0"
            width="600"
            height="600"
            patternUnits="userSpaceOnUse"
          >
            <path
              class="text-gray-200"
              fill="currentColor"
              :d="topography"
            ></path>
          </pattern>
        </defs>
        <rect
          y="72"
          width="640"
          height="640"
          class="text-gray-50"
          fill="currentColor"
        />
        <rect
          x="118"
          width="404"
          height="784"
          fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
        />
      </svg>
    </div>

    <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
      <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div
            class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <h1>
              <span
                class="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base"
                >Mon Petit Sommet</span
              >
              <span
                class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl"
              >
                <span class="block text-gray-900">Trouvez votre prochaine</span>
                <span class="block text-emerald-600">aventure</span>
              </span>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              Découvrez les topos et récits détaillés d'aventures sportives en
              montagne. Parfois engagées. Souvent loin des foules. Toujours
              mémorables.
            </p>
            <div
              class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
            >
              <p class="text-base font-medium text-gray-900">
                Inscrivez-vous pour recevoir nos prochaines aventures
              </p>
              <form
                name="newsletter"
                method="POST"
                netlify
                class="mt-3 sm:flex"
                @submit.prevent="handleSubmit()"
              >
                <label for="email" class="sr-only">Email</label>
                <input
                  v-model="email"
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:flex-1 border-gray-300"
                  placeholder="Entrez votre email"
                />
                <button
                  type="submit"
                  class="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  M'inscrire
                </button>
              </form>
              <p class="mt-3 text-sm text-gray-500">
                0% pub | 0% spam | 100% aventure
              </p>
            </div>
          </div>
          <div
            class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <div
              class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md"
            >
              <div
                class="relative block w-full bg-white rounded-lg overflow-hidden"
              >
                <img class="w-full" src="~/assets/img/hero-home.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { topography } = usePattern()
const { email, handleSubmit } = useNewsletter()
</script>
