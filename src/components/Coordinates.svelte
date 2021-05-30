<script>
    export let lat = 0.0;
    export let lng = 0.0;
</script>

<div class="uk-width-1-2">
    <label class="uk-form-label" for="form-stacked-text">Enter latitude</label>
    <div class="uk-form-controls">
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: location"></span>
            <input input bind:value={lat}  class="uk-input uk-width-1-1" id="form-stacked-text" type="number" min="-180.0000000" max="180.0000000" step="0.0000001" name="lat" placeholder="latitude" />
        </div>
    </div>
</div>
<div class="uk-width-1-2">
    <label class="uk-form-label" for="form-stacked-text">Enter longitude</label>
    <div class="uk-form-controls">
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: location"></span>
            <input input bind:value={lng} class="uk-input uk-width-1-1" id="form-stacked-text" type="number" min="-180.0000000" max="180.0000000" step="0.0000001" name="lng" placeholder="longitude" />
        </div>
    </div>
</div>
