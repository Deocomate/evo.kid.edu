<template>
  <div>
      <GHeader></GHeader>
      <GContent></GContent>
      <GFooter></GFooter>
  </div>
</template>

<script>
  import GContent from '@/layout/content.vue'
  import GHeader from '@/layout/header.vue'
  import GFooter from '@/layout/footer.vue'
export default {
  name: 'App',
  components: {
    GContent,
    GHeader,
    GFooter
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  /* font-family: UTMBaseBold; */
}
@font-face {
  font-family: UTMBase;
  src: url('../src/assets/fonts/UTM\ Helve.ttf');
}
@font-face {
  font-family: UTMBaseBold;
  src: url('../src/assets/fonts/UTM\ HelveBold.ttf');
}
@font-face {
  font-family: UTMBaseItalic;
  src: url('../src/assets/fonts/UTM\ Helve_Italic.ttf');
}
@font-face {
  font-family: UTMBaseBoldItalic;
  src: url('../src/assets/fonts/UTM\ HelveBold_Italic.ttf');
}
@font-face {
  font-family: UTMAkashi;
  src: url('../src/assets/fonts/UTM\ Akashi.ttf');
}
@font-face {
  font-family: UTMCookies;
  src: url('../src/assets/fonts/UTM\ Cookies.ttf');
}
@font-face {
  font-family: UTMCooper;
  src: url('../src/assets/fonts/UTM\ Cooper\ Black.ttf');
}
@font-face {
  font-family: UTMCooperItalic;
  src: url('../src/assets/fonts/UTM\ Cooper\ BlackItalic.ttf');
}
</style>
