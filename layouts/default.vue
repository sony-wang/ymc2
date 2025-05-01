<template>
  <div>
    <v-layout>
      <v-app-bar :elevation="2" color="blue-grey-darken-4">
        <template #prepend>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
        </template>

        <v-app-bar-title>
          <!-- Application Bar -->
          <v-img
            :width="200"
            aspect-ratio="16/9"
            cover
            src="/logo.png"
          ></v-img>
        </v-app-bar-title>

        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>

        
        <v-btn
        >
          <v-icon
            icon="mdi-web"
            size="x-large"
          ></v-icon>
          <v-menu activator="parent">
            <v-list>
              <v-list-item
                v-for="(locale, index) in locales"
                :key="locale.code"
                :value="index"
                @click="sheet = false; setLocale(locale.code)"
              >
                <v-list-item-title>{{ locale.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>

        <!-- <v-bottom-sheet v-model="sheet">
          <template v-slot:activator="{ props: activatorProps }">
            <div class="text-center pa-8">
              <v-btn
                v-bind="activatorProps"
                size="middle"
                text="language"
              >
              <v-icon
                icon="mdi-web"
                size="large"
              ></v-icon>
            </v-btn>
            </div>
          </template>

          <v-list>
            <v-list-item
              v-for="locale in locales" 
              :key="locale.code"
              @click="sheet = false; setLocale(locale.code)"
              
            >
              <v-list-item-title>{{ locale.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ locale.code }}</v-list-item-subtitle>
          </v-list-item>
          </v-list>
        </v-bottom-sheet> -->
      
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'top' : undefined"
        temporary
      >
        <v-list
          :items="items"
        />
      </v-navigation-drawer>
    </v-layout>
    <p>
      Some default layout content shared across all pages
    </p>
    <slot />
      <!-- <button v-for="locale in locales" :key="locale.code" @click="setLocale(locale.code)">
        {{ locale.name }}
      </button>
      <h1>{{ $t('welcome') }}</h1>
      {{ locales }} -->
  </div>
</template>

<!-- <script >
import { useI18n } from 'vue-i18n';

export default {
    setup() {
        const { setLocale } = useI18n();
        return {
            setLocale
        };
    }
}
</script> -->

<script setup>
import { ref, watch, shallowRef } from 'vue'
const { locales, setLocale } = useI18n()
const sheet = shallowRef(false)

const items = reactive([
  {
    title: 'Foo',
    value: 'foo',
  },
  {
    title: 'Bar',
    value: 'bar',
  },
  {
    title: 'Fizz',
    value: 'fizz',
  },
  {
    title: 'Buzz',
    value: 'buzz',
  },
])

const drawer = ref(false)
const group = ref(null)
// const { setLocale } = useI18n()

watch(group, () => {
  drawer.value = false
})



</script>
