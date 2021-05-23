<script>
    import {navBar, mainBar, subTitle, title} from "../stores"
    import PointList from "../components/PointList.svelte";

    title.set("Pointerest");
    subTitle.set("All Points of interest saved");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-text-center" uk-grid>
    <div class=".uk-width-1-1">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large .uk-width-1-1">
            <PointList/>
        </div>
    </div>
</div>