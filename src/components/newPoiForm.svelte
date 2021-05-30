<script lang="ts">
    import { onMount, getContext } from "svelte";
    const pointerestService = getContext("PointerestService");
    import Coordinates from "./Coordinates.svelte";

    import {user} from "../stores.js"
    export let newPoiSubmitted;

    let pointList = [];
    let username = "";
    let poiname = "";
    let description = "";
    let lat = 52.160858;
    let lng = -7.152420;

    let selectedCat = 0;
    let categories = ["South East","South West","North East","North West"]
    let errorMessage = "";

    onMount(async () => {
        pointList = await pointerestService.getPoints()
    });

    async function createpoi() {
        let category = categories[selectedCat];
        const success = await pointerestService.createPoi($user.id, poiname, category, description ,lat, lng);
        if (success) {
            if (newPoiSubmitted) newPoiSubmitted();
        } else {
            errorMessage = "New Poi not created - an error occurred";
        }
    }

</script>
        <div class="uk-width-expand@m">
            <div class="uk-margin uk-width-1-1 uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                <form on:submit|preventDefault={createpoi} class="uk-form-stacked uk-text-left">
                    <div class="uk-grid uk-grid-stack">
                        <div class="uk-width-1-1">
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">User Name</label>
                                <div class="uk-form-controls">
                                    <div class="uk-inline">
                                        <span class="uk-form-icon" uk-icon="icon: user"></span>
                                        <input input bind:value={$user.email} class="uk-input" id="form-stacked-text" type="text" name="username" placeholder={$user.email} readonly/>
                                    </div>
                                </div>
                            </div>
                            <div class="uk-width-1-1">
                                <div class="uk-margin">
                                    <label class="uk-form-label" for="form-stacked-text">Enter Point Name</label>
                                    <div class="uk-form-controls">
                                        <div class="uk-inline">
                                            <span class="uk-form-icon" uk-icon="icon: location"></span>
                                            <input input bind:value={poiname} class="uk-input" id="form-stacked-text" type="text" name="poiname" placeholder="Point name" />
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-width-1-1">
                                    <div class="uk-form-label">Category</div>

                                    <div class="uk-form-controls ">
                                        <label><input bind:group={selectedCat} value={0} class="uk-radio" type="radio" name="method"> {categories[0]} </label><br>
                                        <label><input bind:group={selectedCat} value={1} class="uk-radio" type="radio" name="method"> {categories[1]} </label><br>
                                        <label><input bind:group={selectedCat} value={2} class="uk-radio" type="radio" name="method"> {categories[2]} </label><br>
                                        <label><input bind:group={selectedCat} value={2} class="uk-radio" type="radio" name="method"> {categories[3]} </label>
                                    </div>
                                </div>
                                <div class="uk-margin uk-width-1-1">

                                    <label class="uk-form-label" for="form-stacked-text">Enter Point Name</label>
                                    <div class="uk-form-controls">
                                        <div class="uk-inline">
                                            <span class="uk-form-icon" uk-icon="icon: location"></span>
                                            <input input bind:value={description} class="uk-input" id="form-stacked-text" type="text" name="description" placeholder="Point description" />
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-text-center" uk-grid>
                                    <Coordinates bind:lat={lat} bind:lng={lng}/>

                                    {#if errorMessage}
                                        <div class="uk-text-left uk-text-small">
                                            {errorMessage}
                                        </div>
                                    {/if}
                                </div>
                            </div>

                        </div>
                        <div class="uk-width-1-1 uk-margin-small-top">
                            <div class="uk-margin">
                                <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Add Point <i style="color:rgb(255,255,255)" class="fas fa-plus"> </i> </button>
                            </div>
                        </div>
                </form>
            </div>        </div>



