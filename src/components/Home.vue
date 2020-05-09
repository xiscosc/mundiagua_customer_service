<template>
    <div>
        <div class="row mt-4">
            <div class="col-md-12 text-center">
                <font-awesome-icon icon="file-medical-alt" size="5x" class="icon-color"></font-awesome-icon>
            </div>
        </div>
        <div class="row justify-content-center mt-4">
                <b-form inline v-on:submit.prevent="checkRepair">
                    <b-input-group class="mb-2 mr-sm-2 mb-sm-0" :prepend="repairType">
                        <b-input v-model="repairId" :prepend="repairId" placeholder="Número de reparación"
                                 v-on:keyup="checkId"></b-input>
                    </b-input-group>

                    <b-button :disabled="isMotor || !valid" pill @click="checkRepair" variant="primary"
                              class="repair-button">Continuar
                    </b-button>
                </b-form>
        </div>
        <div class="row mt-4">
            <div class="col-md-12">
                <b-alert v-if="isMotor" variant="warning" class="text-left" show>Las reparaciones de motor ya no pueden
                    ser consultadas online. Si necesita ayuda póngase en contacto con nosotros
                </b-alert>
                <b-alert v-if="!valid" variant="warning" class="text-left" show>Su id online de reparación debe empezar
                    por A o X, por ejemplo A123456 o X987654
                </b-alert>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                repairId: "",
                isMotor: false,
                valid: true,
            };
        },
        methods: {
            checkRepair() {
                if (this.repairType === 'Motor' || !this.valid) {
                    return;
                }

                this.isMotor = false;
                this.$router.push({
                    name: "repair-status",
                    params: {repairId: this.repairId}
                });
            },

            checkId() {
                if (this.repairType === 'Motor') {
                    this.isMotor = true;
                } else {
                    this.isMotor = false;
                }
                this.valid = this.isValid(0);
            },

            isValid(len) {
                if (this.repairType === '' && this.repairId.length > len) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        computed: {
            repairType() {
                var brand = "";
                if (this.repairId) {
                    switch (this.repairId.charAt(0).toLowerCase()) {
                        case "a":
                            brand = "ATH";
                            break;
                        case "x":
                            brand = "Idegis";
                            break;
                        case "e":
                            brand = "Motor";
                            break;
                        default:
                            brand = "";
                            break;
                    }
                }

                return brand;
            }
        },
        created() {
            if (this.$route.query.id) {
                this.$router.push({
                    name: "repair-status",
                    params: {repairId: this.$route.query.id}
                });
            }
        }
    };
</script>