<script>
    import travelicon from "/src/assets/travelicon.png"
    import {title, subTitle} from "../stores.js"
</script>

<div class="uk-width-2-3@m  uk-card uk-card-default uk-padding-small uk-visible@m">
    <div class="uk-grid">
        <div class="uk-width-1-6@m">
            <a href="/"> <img src="{travelicon}" width="60" alt="img"/> </a>
        </div>
        <div class="uk-width-expand@m uk-text-left">
            <div class="title">
                {$title}
            </div>
            <div class="uk-text-muted uk-text-small">
                {$subTitle}
            </div>
        </div>
        <div class="uk-card uk-card-small uk-text-center uk-padding-remove">
            <a target="_blank" href="https://github.com/mullins1989/Pointerest-Svelte">
                <div>
                    <i class="fas fa-map fa-3x" style="color:rgb(247, 181, 37)" title="Source repo" pos="bottom" uk-tooltip></i>
                </div>
                <div class="uk-width-expand@m uk-text-left">
                    <div class="uk-text-muted uk-text-center" style="font-size:xx-small">Pointerest-Svelte</div>
                </div>
            </a>
        </div>
    </div>
</div>