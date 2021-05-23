<script>
    import {title, subTitle, navBar, welcomeBar} from "../stores"
    import explorer from "/src/assets/explorer.jpg";
    title.set("Pointerest");
    subTitle.set("Sign up or Log in");

    navBar.set({
        bar: welcomeBar
    });
</script>



    <div class="uk-card uk-card-default  uk-card-body uk-animation-fade">
        <div class="uk-width-1-1">
            <img class="uk-align-center" width="200" src="{explorer}" alt="Explorer">
        </div>
        <div class="uk-card uk-card-default uk-card-small">
            <div class="uk-text-center uk-card-body">
                    <h3 class="uk-heading-small"> Pointerest - Start exploring!!!  </h3>
            </div>
        </div>
    </div>
