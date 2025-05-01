<template>
    <div>
        <!-- <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink> -->
        <!-- <NuxtPage /> -->
        <v-carousel :show-arrows="true">
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            cover
            ></v-carousel-item>
        </v-carousel>

        <div>
            <br>
            <br>
            <br>
            <br>
            <div>
            
            <p>{{ $t('welcome') }}</p>
            <p>{{ $t('welcome') }}</p>
            <p>{{ $t('welcome') }}</p>
            </div>
        </div>
        
    </div>
</template>

<script setup>
    const items = [
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
  ]

</script>

<style>

</style>