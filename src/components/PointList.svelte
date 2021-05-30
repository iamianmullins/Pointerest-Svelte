<script>
  import {onMount} from 'svelte'
  import {PointerestService} from "../services/pointerest-service";
  import {push} from "svelte-spa-router";
  const poiService = new PointerestService("http://localhost:4000");
  let id="";
  let poiCount;
  let pointList;

  let message = "";
  onMount(async () => {
    pointList = await poiService.getPoints()
    poiCount = pointList.length
  })

</script>


<h3 class="uk-heading-divider">
  Poi List </h3>
<div class="uk-table uk-table-divider uk-table-hover">
  <table class="uk-table uk-table-divider uk-table-hover">
    <thead>
    <th>
      Poiname
    </th>
    <th>
      Category
    </th>
    <th>
      Latitude
    </th>
    <th>
      Longitude
    </th>
    </thead>
    <tbody class="uk-text-left uk-table-hover">
    {#if pointList}
      {#each pointList as point}
        <tr>
          <td>{point.poiname}</td>
          <td>{point.category}</td>
          <td>{point.latitude}</td>
          <td>{point.longitude}</td>
          <tr>
          <tbody>
              <th>
                Description
              </th>
              <td colspan="4">
                {point.description}
              </td>
          </tbody>
        <tr>
        </tr>
      {/each}
    {/if}
    </tbody>
  </table>
</div>