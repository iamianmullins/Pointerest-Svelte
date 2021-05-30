<script>
    import {navBar, mainBar, subTitle, title} from "../stores"
    import ReviewList from "../components/ReviewList.svelte";
    import ReviewForm from "../components/ReviewForm.svelte";

    title.set("Pointerest");
    subTitle.set("All Reviews for Pointerest");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <ReviewList/>

        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <ReviewForm/>
        </div>
    </div>
</div>