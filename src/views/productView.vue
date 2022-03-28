<template>
  <div>
    <div class="container">
      <div
        style="min-height: 400px; background-position: center center; background-size: cover"
        :style="{ backgroundImage: `url(${product.imageUrl})` }"
      ></div>
      <div class="row justify-content-between mt-4 mb-7">
        <div class="col-md-7">
          <h2 class="mb-0">{{ product.title }}</h2>
          <p class="fw-bold">NT${{ product.price }}</p>
          <p>
            {{ product.description }}
          </p>
          <div class="my-4">
            <img
              :src="img"
              alt=""
              class="img-fluid mt-4"
              v-for="img in product.imagesUrl"
              :key="img"
            />
          </div>
          <div
            class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3"
            id="accordionExample"
          >
            <div class="card border-0">
              <div
                class="card-header py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0"
                id="headingOne"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                <div class="d-flex justify-content-between align-items-center pe-1">
                  <h4 class="mb-0">Lorem ipsum</h4>
                  <i class="fas fa-minus"></i>
                </div>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="card-body pb-5">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div
                class="card-header py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0"
                id="headingTwo"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                <div class="d-flex justify-content-between align-items-center pe-1">
                  <h4 class="mb-0">Lorem ipsum</h4>
                  <i class="fas fa-plus"></i>
                </div>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="card-body pb-5">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div
                class="card-header py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0"
                id="headingThree"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                <div class="d-flex justify-content-between align-items-center pe-1">
                  <h4 class="mb-0">Lorem ipsum</h4>
                  <i class="fas fa-plus"></i>
                </div>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="card-body pb-5">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group mb-3 border mt-3">
            <div class="input-group-prepend">
              <button
                class="btn btn-outline-dark rounded-0 border-0 py-3"
                type="button"
                id="button-addon1"
              >
                <i class="fas fa-minus"></i>
              </button>
            </div>
            <input
              type="number"
              class="form-control border-0 text-center my-auto shadow-none"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              value="1"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-dark rounded-0 border-0 py-3"
                type="button"
                id="button-addon2"
              >
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <a href="#" class="btn btn-dark btn-block rounded-0 py-3" @click.prevent="addToCard()"
            >Lorem ipsum</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '../utils/emitter';

export default {
  data() {
    return {
      product: [],
      id: '',
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProduct();
  },
  methods: {
    getProduct() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http
        .get(url)
        .then((result) => {
          this.product = result.data.product;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    addToCard() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;

      const data = { product_id: this.id, qty: 1 };

      this.$http
        .post(url, { data })
        .then((result) => {
          console.log(result);
          emitter.emit('get-cart');
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
