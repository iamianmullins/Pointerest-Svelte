<script lang="ts">
    import { onMount, getContext } from "svelte";
    const pointerestService = getContext("PointerestService");
    import travelicon from "/src/assets/travelicon.png";
    import {user} from "../stores.js"


    let pointList = [];
    let username = "";
    let poiname = "";
    let description = "";
    let latitude = 0.00;
    let longitude = 0.00;

    let selectedCat = 0;
    let categories = ["South East","South West","North East","North West"]
    let errorMessage = "";

    onMount(async () => {
        pointList = await pointerestService.getPoints()
    });

    async function createpoi() {
        let category = categories[selectedCat];
        const success = await pointerestService.createPoi($user.email, poiname, category , description, latitude, longitude);
        if (success) {
            errorMessage =""
        } else {
            errorMessage = "New Poi not created - an error occurred";
        }
    }
</script>


<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
        <div class="uk-width-auto@m">
            <img width="400" src="{travelicon}" alt="travelicon">
        </div>
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
                                    <div class="uk-width-1-2">
                                        <label class="uk-form-label" for="form-stacked-text">Enter latitude</label>
                                        <div class="uk-form-controls">
                                            <div class="uk-inline">
                                                <span class="uk-form-icon" uk-icon="icon: location"></span>
                                                <input input bind:value={latitude}  class="uk-input uk-width-1-1" id="form-stacked-text" type="number" min="-180.0000000" max="180.0000000" step="0.0000001" name="latitude" placeholder="latitude" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-1-2">
                                        <label class="uk-form-label" for="form-stacked-text">Enter longitude</label>
                                        <div class="uk-form-controls">
                                            <div class="uk-inline">
                                                <span class="uk-form-icon" uk-icon="icon: location"></span>
                                                <input input bind:value={longitude} class="uk-input uk-width-1-1" id="form-stacked-text" type="number" min="-180.0000000" max="180.0000000" step="0.0000001" name="longitude" placeholder="longitude" />
                                            </div>
                                        </div>
                                    </div>

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
    </div>


</div>


