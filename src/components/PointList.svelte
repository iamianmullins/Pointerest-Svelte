<script>
  import {onMount, getContext} from 'svelte'
  const PointerestService = getContext("PointerestService");

  let pointList;
  onMount(async () => {
    pointList = await PointerestService.getPoints()
  })
</script>

<h3 class="uk-heading-divider">
  Poi List </h3>
<div class="uk-table uk-table-divider">
  <table class="uk-table">
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
    <tbody class="uk-text-left">
    {#if pointList}
      {#each pointList as point}
        <tr>
          <td>{point.poiname}</td>
          <td>{point.category}</td>
          <td>{point.latitude}</td>
          <td>{point.category}</td>
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