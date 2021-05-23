<script>
  import {setContext} from "svelte";
  import Navigator from "./components/Navigator.svelte"
  import Router from "svelte-spa-router";
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Points from "./pages/Points.svelte"
  import Users from "./pages/Users.svelte";
  import {PointerestService} from "./services/pointerest-service";
  setContext("PointerestService", new PointerestService("http://localhost:4000"));

  let routes = {
    "/" : Main,
    "/login": Login,
    "/users": Users,
    "/points": Points,
    "/logout" : Main
  }

</script>

<div class="uk-container">
  <Navigator/>
  <hr><br>
  <Router {routes} />
</div>


