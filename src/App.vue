<template>
    <div id="app">
        <div class="container-fluid pl-0 pr-0">
            <div class="containermundiagua mundaigua-header pt-4 pb-5">
                <div class="row">
                    <div class="col-lg mobile-text-left">
                        <img src="./assets/logo_blue.png" class="img-fluid head-image noprint"/>
                    </div>
                    <div class="col-lg">
                        <h1 class="mobile-text-right text-white">Reparaciones</h1>
                    </div>
                </div>
                <div class="svg-border-rounded text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none"
                         fill="currentColor">
                        <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
                    </svg>
                </div>
            </div>
            <div class="containermundiagua ml-2 mr-2">
                <div class="row">
                    <div class="col-12 p-0">
                        <router-view></router-view>
                    </div>

                    <div class="col-12 p-0">
                        <hr/>
                        <app-contact></app-contact>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App"
    };
</script>

<style>
    @media only screen and (max-width: 600px) {
        .containermundiagua {
            padding: 0.5% 5% 5% 5%;
        }

        .mobile-icon {
            display: none;
        }

        .mobile-text-right {
            text-align: center !important;
        }

        .mobile-text-left {
            text-align: center !important;
        }
    }

    @media only screen and (min-width: 601px) {
        .containermundiagua {
            padding: 0.5% 20% 3% 20%;
        }

        .mobile-text-right {
            text-align: right !important;
        }

        .mobile-text-left {
            text-align: left !important;
        }
    }

    @media print {
        .noprint {
            visibility: hidden;
        }
    }

    .head-image {
        max-width: 40%;
    }

    .mundaigua-header {
        background-image: linear-gradient(135deg, #0061f2, rgba(105, 0, 199, .8));
        height: 100%;
        margin: 0;
        background-repeat: no-repeat;
        background-attachment: fixed;
        position: relative;
    }

    .repair-data {
        color: rgb(59, 58, 58);
        margin-bottom: 2px;
        font-size: small;
        font-style: italic;
    }

    .repair-title {
        color: #0061f2;
    }

    .repair-status {
        color: #0061f2;
        margin-bottom: 2px;
    }

    .repair-title-section {
        color: rgb(56, 56, 56);
    }

    .repair-button {
        background-color: #0061f2;
        border-color: #0061f2;
    }

    .icon-color {
        color: #0061f2;
    }

    .svg-border-rounded svg {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3rem;
        width: 100%;
    }
</style>
