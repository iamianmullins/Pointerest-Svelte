<script>
    import {mainBar, navBar, subTitle, title} from "../stores"
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
    import PointN from "../components/newPoiForm.svelte";

    const pointerestService = getContext("PointerestService");

    title.set("Pointerest");
    subTitle.set("Analysis");
    navBar.set({
        bar: mainBar
    });

    let pointList = [];
    let data = {

        labels: ["South East", "South West", "North East", "North West"],
        datasets: [
            {
                values: [0, 0, 0, 0]
            }
        ]
    };



    async function refreshCharts() {
        let pointList = await pointerestService.getPoints();
        pointList.forEach(point => {
            if (point.category == "South East") {
                data.datasets[0].values[0] ++
            } else if (point.category == "South West") {
                data.datasets[0].values[1] ++
            } else if (point.category == "North East") {
                data.datasets[0].values[2] ++
            } else if (point.category == "North West") {
                data.datasets[0].values[3] ++
            }
        })


    }

    function newPoiCreated() {
        refreshCharts();
    }

    onMount(async () => {
        pointList = await pointerestService.getPoints();
        await refreshCharts();
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge uk-margin">
            <Chart data={data} type="pie"/>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge uk-margin">
            <Chart data={data} type="bar"/>
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge uk-margin">
            <PointN {newPoiCreated}/>
        </div>
    </div>
</div>
