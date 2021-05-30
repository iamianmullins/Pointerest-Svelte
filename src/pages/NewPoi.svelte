<script>
    import {navBar, mainBar, subTitle, title} from "../stores"
    import PointN from "../components/newPoiForm.svelte";
    import travelicon from "/src/assets/travelicon.png";
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";
    const pointerestService = getContext("PointerestService");

    let lat = 52.160858;
    let lng = -7.152420;

    let map;
    onMount(async () => {
        const mapConfig = {
            location: {lat: lat, lng: lng},
            zoom: 10,
            minZoom: 1,
        };
        map = new LeafletMap("pointerest-map", mapConfig, 'Terrain');
        map.addLayerGroup('Points');
        map.showZoomControl();
        map.showLayerControl();
        const pointList = await pointerestService.getPoints()

        pointList.forEach(point=>{

            console.log(point.user);
            const pointsStr = ` ${point.poiname} ${point.latitude} €${point.longitude.toString()}`;

            if (point.latitude && point.longitude) {
                map.addMarker({lat: point.latitude, lng: point.longitude}, pointsStr, 'Points');
            }
        });
    });

    title.set("Pointerest");
    subTitle.set("Create new Poi!");
    navBar.set({
        bar: mainBar
    });

    function newPoiSubmitted(latitude, longitude) {
        map.addMarker({lat: longitude, lng: longitude});
        map.moveTo(12, {lat: latitude, lng: longitude})
    }
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <div id="pointerest-map" class="ui embed" style="height:600px"></div>
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <PointN {newPoiSubmitted} bind:lat={lat} bind:lng={lng}/>
        </div>
    </div>
</div>

