<script>
    import {onMount} from 'svelte'
    import {PointerestService} from "../services/pointerest-service";
    import {push} from "svelte-spa-router";
    const poiService = new PointerestService("http://localhost:4000");
    const id="";
    let reviewCount;
    let reviewList;

    let message = "";
    onMount(async () => {
       reviewList = await poiService.getReviews();
       console.log(reviewList);
        reviewCount = reviewList.length;

    })

</script>


<h3 class="uk-heading-divider">
    Reviews </h3>
<div class="uk-table uk-table-divider uk-table-hover">
    <table class="uk-table uk-table-divider uk-table-hover">
        <thead>
        <th>
            Timestamp
        </th>
        <th>
            Reviewer
        </th>
        </thead>
        <tbody class="uk-text-left uk-table-hover">
        {#if reviewList}
            {#each reviewList as review}
                <tr>
                    <td>{review.date}</td>
                    <td>{review.reviewer} : {review.comment}</td>
                </tr>
            {/each}
        {/if}
        </tbody>
    </table>
</div>