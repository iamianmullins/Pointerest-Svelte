<script>
    import UserList from "../components/UserList.svelte";
    import travelicon from "/src/assets/travelicon.png";
    import {navBar, mainBar, subTitle, title} from "../stores"

    title.set("Pointerest");
    subTitle.set("All Current Users");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-text-center" uk-grid>

    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <UserList/>
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <img width="300" src="{travelicon}" alt="travel icon">
    </div>
</div>