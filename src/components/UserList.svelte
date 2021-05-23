<script>
    import {onMount} from 'svelte'
    import { PointerestService } from "../services/pointerest-service";

    const poiService = new PointerestService("http://localhost:4000");
    let userCount;
    let userList;
    onMount(async () => {
        userList = await poiService.getUsers()
        userCount = userList.length
    })
</script>

<h3 class="uk-heading-divider">
    User List </h3>
<div class="uk-table uk-table-divider">
    <table class="uk-table">
        <thead>
        <th>
            First Name
        </th>
        <th>
            Last Name
        </th>
        <th>
            Email
        </th>
        </thead>
        <tbody class="uk-text-left">
        {#if userList}
            {#each userList as user}
                <tr>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                </tr>
            {/each}
        {/if}
        </tbody>
    </table>
</div>