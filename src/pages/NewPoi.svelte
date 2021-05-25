<script>
    import {navBar, mainBar, subTitle, title} from "../stores"
    import PointN from "../components/newPoiForm.svelte";

    title.set("Pointerest");
    subTitle.set("Create new Poi!");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-1 ">
            <PointN/>
    </div>
</div>