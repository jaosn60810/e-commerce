<template>
  <div class="bg-white sticky-top">
    <div class="container">
      <nav class="navbar px-0 navbar-expand-lg navbar-light bg-white">
        <router-link
          class="navbar-brand position-absolute"
          to="/"
          style="left: 50%; transform: translate(-50%, -50%); top: 50%"
        >
          Navbar
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse bg-white custom-header-md-open" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link ps-0" to="/products">產品頁面</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/product/asd">產品</router-link>
            </li>
          </ul>
        </div>
        <div class="d-flex">
          <a href="#" class="position-relative btn btn-sm"
            ><i class="bi bi-bag"> </i>
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {{ cartData.carts.length }}
            </span></a
          >
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import emitter from '../utils/emitter';

export default {
  data() {
    return {
      cartData: { carts: [] },
    };
  },
  mounted() {
    this.getCart();
    emitter.on('get-cart', () => {
      this.getCart();
    });
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((result) => {
          this.cartData = result.data.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
