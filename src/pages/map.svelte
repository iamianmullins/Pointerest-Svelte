<script>
    import 'leaflet/dist/leaflet.css';
    import {mainBar, navBar, subTitle, title} from "../stores"
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";
    const pointerestService = getContext("PointerestService");

    let lat = 52.160858;
    let lng = -7.152420;

    let map;
    onMount(async () => {
        const mapConfig = {
            location: {lat: lat, lng: lng},
            zoom: 8,
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
    subTitle.set("Map of all POI's created to date");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-1-1">
        <div id="pointerest-map" class="ui embed" style="height:800px"></div>
    </div>
</div>