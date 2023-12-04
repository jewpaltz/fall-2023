<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getUsers, type User } from "@/model/users";


const mapDiv = ref<HTMLElement | null>(null);
const users = ref<User[]>([]);

async function initMap() {
  const address = "New Paltz, NY";
  const geocoder = new google.maps.Geocoder();
  const place = await new Promise<google.maps.GeocoderResult[]>((resolve, reject) => {
    geocoder.geocode({ address }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK && results?.length) {
        resolve(results);
      } else {
        reject(status);
      }
    });
  });

  const map = new google.maps.Map(mapDiv.value!, {
    zoom: 4,
    center: place[0].geometry.location,
  });

  setMarkers(map);
}


async function setMarkers(map: google.maps.Map) {

  users.value = await getUsers();

  for (let user of users.value) {

    new google.maps.Marker({
      position: user.address?.coordinates,
      map,
      title: `${user.firstName} ${user.lastName}`,
    });
  }
}

onMounted(() => {
  initMap();
});

</script>

<template>
  <div ref="mapDiv">

  </div>
</template>

<style scoped>
  div {
    height: 80vh;
  }
</style>