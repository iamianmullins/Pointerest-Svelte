<script lang="ts">
    import {mainBar, navBar, subTitle, title} from "../stores";
    import explorer from "/src/assets/explorericon.jpg";
    import SettingsForm from "../components/SettingsForm.svelte";

    title.set("Pointerest");
    subTitle.set("Edit and save your settings");

    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <img width="300" src="{explorer}" alt="explorer">
    </div>
    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
            <h3 class="uk-card-title uk-text-center">Edit any field and press save</h3>
            <SettingsForm/>
        </div>
    </div>
</div>
