<script>
  import {setContext} from "svelte";
  import {PointerestService} from "./services/pointerest-service";
  import Main from "./pages/Main.svelte"

  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte";
  import Analysis from "./pages/Analysis.svelte";
  import Points from "./pages/Points.svelte"
  import NewPoi from "./pages/NewPoi.svelte";
  import Reviews from "./pages/Reviews.svelte";
  import Map from "./pages/map.svelte";
  import Settings from "./pages/Settings.svelte";
  import Users from "./pages/Users.svelte";
  import Navigator from "./components/Navigator.svelte"
  import Router from "svelte-spa-router";

  setContext("PointerestService", new PointerestService("http://localhost:4000"));

  let routes = {
    "/" : Main,
    "/login": Login,
    "/analysis": Analysis,
    "/users": Users,
    "/reviews": Reviews,
    "/newpoi": NewPoi,
    "/map": Map,
    "/points": Points,
    "/logout" : Main,
    "/signup" : Signup,
    "/settings" : Settings
  }

</script>

<div class="uk-container">
  <Navigator/>
  <hr><br>
  <Router {routes} />
</div>


