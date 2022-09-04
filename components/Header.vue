<template>
  <Popover class="relative z-50 bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <NuxtLink to="/">
            <span class="sr-only">Mon Petit Sommet</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="~/assets/img/logo.png"
              alt="logo mon petit sommet"
            />
          </NuxtLink>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
          >
            <span class="sr-only">Ouvrir menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <NuxtLink
            v-for="navItem in navItems"
            :key="navItem.name"
            :to="navItem.path"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            {{ navItem.name }}
          </NuxtLink>
        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <NuxtLink
            to="/contact"
            class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Contact
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
          >
            Blog
          </NuxtLink>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        v-slot="{ close }"
        focus
        class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="~/assets/img/logo.png" alt="Workflow" />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
                >
                  <span class="sr-only">Fermer menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <NuxtLink
                  v-for="navItem in navItems"
                  :key="navItem.name"
                  :to="navItem.path"
                  @click="close()"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <component :is="navItem.icon" class="flex-shrink-0 h-6 w-6" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ navItem.name }}
                  </span>
                </NuxtLink>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6 bg-gray-50">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <NuxtLink
                to="/blog"
                @click="close()"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Blog
              </NuxtLink>
              <NuxtLink
                to="/contact"
                @click="close()"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Contact
              </NuxtLink>
              <NuxtLink
                to="/cgu"
                @click="close()"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                CGU
              </NuxtLink>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  HomeIcon,
  MapIcon,
  SunIcon,
  PhotoIcon,
  ChevronDoubleDownIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'

const navItems = [
  {
    name: 'Rando',
    path: '/randonnees',
    icon: MapIcon,
  },
  {
    name: 'Ski de rando',
    path: '/ski-de-rando',
    icon: SunIcon,
  },
  {
    name: 'Alpinisme',
    path: '/alpinisme',
    icon: PhotoIcon,
  },
  {
    name: 'Refuges',
    path: '/refuges',
    icon: HomeIcon,
  },
  {
    name: 'Canoë Kayak',
    path: '/canoe-kayak',
    icon: ChevronDoubleDownIcon,
  },
]

export default {
  name: 'Header',
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
    ChevronDownIcon,
    ChevronDoubleDownIcon,
  },
  setup() {
    return {
      navItems,
    }
  },
}
</script>
