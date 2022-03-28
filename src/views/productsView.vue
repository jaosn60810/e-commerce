<template>
  <nav
    class="navbar navbar-expand-lg navbar-light justify-content-center border border-start-0 border-end-0 border-top border-bottom"
  >
    <div class="navbar-nav flex-row overflow-auto navbar-custom-scroll">
      <a class="nav-item nav-link text-nowrap px-2" href="#">Lorem ipsum</a>
      <a class="nav-item nav-link text-nowrap px-2" href="#">Lorem ipsum</a>
      <a class="nav-item nav-link text-nowrap px-2 active" href="#"
        >Lorem ipsum <span class="sr-only">(current)</span></a
      >
      <a class="nav-item nav-link text-nowrap px-2" href="#">Lorem ipsum</a>
      <a class="nav-item nav-link text-nowrap px-2" href="#">Lorem ipsum</a>
    </div>
  </nav>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card border-0 mb-4 position-relative position-relative">
          <img :src="product.imageUrl" class="card-img-top rounded-0" alt="..." />
          <a href="#" class="text-dark">
            <i class="bi bi-heart position-absolute" style="right: 16px; top: 16px"></i>
          </a>
          <div class="card-body p-0">
            <h4 class="mb-0 mt-3">
              <router-link :to="`/product/${product.id}`">{{ product.title }}</router-link>
            </h4>
            <p class="card-text text-muted mb-0" style="height: 4.5rem; overflow: hidden">
              {{ product.description }}
            </p>
            <p class="text-muted mt-3">NT$ {{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <nav class="d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(url)
        .then((result) => {
          this.products = result.data.products;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
