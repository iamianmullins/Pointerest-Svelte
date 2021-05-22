<script>
  import {setContext} from "svelte";
  import PointList from "./components/PointList.svelte"
  import UserList from "./components/UserList.svelte";
  import {PointerestService} from "./services/pointerest-service";


  setContext("PointerestService", new PointerestService("http://localhost:4000"));
</script>

<div class="uk-container">
  <h1> Pointerest Application </h1>
  <UserList/>
  <PointList/>
</div>


