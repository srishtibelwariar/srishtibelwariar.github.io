HELLO! (From the other siiiiiiideeeeeeee)
#430D23
#F3CDAF
#DA9602
#CD7111
#7C2D4C

#DCA80A
#EADD64
#441227
#EDC7B2
#7E344F

#CFA5A1
#B96A3A
#782F4E
#461026
#DA9502


.honeycomb_container{
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: var(--honeycomb-unit-spacing) var(--honeycomb-unit-spacing);
		justify-items: center;
		align-items: center;
		border: green 5px solid;
}

.honeycomb_unit{
  align-items: center;
  background-color: var(--color-hex-default);
  cursor: pointer;
  display: flex;
  fill: red;
  height: var(--honeycomb-unit-width);
  justify-content: center;
  margin: var(--hex-border) 0;
  position: relative;
  width: var(--honeycomb-unit-width);
	transform: rotate(60deg);
/* border-bottom: 50px solid #555;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	height: 0;
	width: 125px; */
}

.honeycomb_unit img {
	height: inherit;
	width: inherit;
}


/*Window Resizing*/
/*** HEXAGON SIZING AND EVEN ROW INDENTATION *****************************************************************/
/* <- 5-4  hexagons per row */
/* @media only screen and (min-width:1201px) {
  body {
    background-color: lightblue;
  }
} */

/* <- 4-3  hexagons per row */
/* @media only screen and (max-width: 1200px) and (min-width:901px) {
  body {
    background-color: green;
  }
} */





:root {
  /* Change this to change the appearance of the hexaons */
  --hex-width: 250px;
  --hex-between: 10px;

  /* Other hexagon dimentions */
  --hex-height: calc(var(--hex-width) / 1.73 /* sqrt(3) */);
  --hex-margin: calc(var(--hex-width) / 2);
  --hex-border: calc(var(--hex-margin) / 1.73 /* sqrt(3) */);
  --hex-transition: all .2s ease;

  /* Colors */
  --color-hex-default: #000000;
  --color-hex-hover:   #FFFFFF;
  --color-angular:     #DD0031;
  --color-atom:        #66595C;
  --color-bootstrap:   #563D7C;
  --color-circleci:    #343434;
  --color-css:         #1572B6;
  --color-git:         #F14E32;
  --color-gulp:        #DA4648;
  --color-haskell:     #5D4F85;
  --color-html:        #E34F26;
  --color-javascript:  #F7DF1E;
  --color-meteor:      #DE4F4F;
  --color-python:      #3776AB;
  --color-rails:       #CC0000;
  --color-sass:        #CC6699;
  --color-vuejs:       #4FC08D;
  --color-webpack:     #8DD6F9;
}

/* Hexagons */
.hexagon-container {
  display: grid;
  grid-template-columns: var(--hex-width) var(--hex-width) var(--hex-width) var(--hex-width);
  grid-auto-rows: calc(var(--hex-width) - 28.87px/2);
  grid-gap: var(--hex-between) var(--hex-between);
  padding-bottom: var(--hex-border);
}
.hexagon {
  align-items: center;
  background-color: var(--color-hex-default);
  cursor: pointer;
  display: flex;
  fill: white;
  height: var(--hex-height);
  justify-content: center;
  margin: var(--hex-border) 0;
  position: relative;
  transition: var(--hex-transition);
  width: var(--hex-width);
}

.hexagon::after,
.hexagon::before {
  border-left: var(--hex-margin) solid transparent ;
  border-right: var(--hex-margin) solid transparent;
  content: "";
  left: 0;
  position: absolute;
  transition: var(--hex-transition);
  width: 0;
}
.hexagon::after {
  border-top: var(--hex-border) solid var(--color-hex-default);
  top: 100%;
  width: 0;
}
.hexagon::before {
  border-bottom: var(--hex-border) solid var(--color-hex-default);
  bottom: 100%;
}

.hexagon:hover {
  background-color: var(--color-hex-hover);
}
.hexagon:hover::after,
.hexagon:hover::before {
  border-top-color: var(--color-hex-hover);
  border-bottom-color: var(--color-hex-hover);
  }

.hexagon:nth-child(8n + 5),
.hexagon:nth-child(8n + 6),
.hexagon:nth-child(8n + 7),
.hexagon:nth-child(8n + 8) {
  margin-left: calc(var(--hex-width) / 2 + var(--hex-between) / 2);
}

.hexagon > svg {
  height: 75%;
  transition: var(--hex-transition);
}








/* Colors */
.color-sass {
  background-color: var(--color-sass);
}
.color-sass::after,
.color-sass::before {
  border-top-color: var(--color-sass);
  border-bottom-color: var(--color-sass);
}
.color-sass:hover {
  fill: var(--color-sass);
}

.color-angular {
  background-color: var(--color-angular);
}
.color-angular::after,
.color-angular::before {
  border-top-color: var(--color-angular);
  border-bottom-color: var(--color-angular);
}
.color-angular:hover {
  fill: var(--color-angular);
}

.color-gulp {
  background-color: var(--color-gulp);
}
.color-gulp::after,
.color-gulp::before {
  border-top-color: var(--color-gulp);
  border-bottom-color: var(--color-gulp);
}
.color-gulp:hover {
  fill: var(--color-gulp);
}

.color-rails {
  background-color: var(--color-rails);
}
.color-rails::after,
.color-rails::before {
  border-top-color: var(--color-rails);
  border-bottom-color: var(--color-rails);
}
.color-rails:hover {
  fill: var(--color-rails);
}

.color-git {
  background-color: var(--color-git);
}
.color-git::after,
.color-git::before {
  border-top-color: var(--color-git);
  border-bottom-color: var(--color-git);
}
.color-git:hover {
  fill: var(--color-git);
}

.color-html {
  background-color: var(--color-html);
}
.color-html::after,
.color-html::before {
  border-top-color: var(--color-html);
  border-bottom-color: var(--color-html);
}
.color-html:hover {
  fill: var(--color-html);
}

.color-javascript {
  background-color: var(--color-javascript);
}
.color-javascript::after,
.color-javascript::before {
  border-top-color: var(--color-javascript);
  border-bottom-color: var(--color-javascript);
}
.color-javascript:hover {
  fill: var(--color-javascript);
}

.color-vuejs {
  background-color: var(--color-vuejs);
}
.color-vuejs::after,
.color-vuejs::before {
  border-top-color: var(--color-vuejs);
  border-bottom-color: var(--color-vuejs);
}
.color-vuejs:hover {
  fill: var(--color-vuejs);
}

.color-circleci {
  background-color: var(--color-circleci);
}
.color-circleci::after,
.color-circleci::before {
  border-top-color: var(--color-circleci);
  border-bottom-color: var(--color-circleci);
}
.color-circleci:hover {
  fill: var(--color-circleci);
}

.color-webpack {
  background-color: var(--color-webpack);
}
.color-webpack::after,
.color-webpack::before {
  border-top-color: var(--color-webpack);
  border-bottom-color: var(--color-webpack);
}
.color-webpack:hover {
  fill: var(--color-webpack);
}

.color-css {
  background-color: var(--color-css);
}
.color-css::after,
.color-css::before {
  border-top-color: var(--color-css);
  border-bottom-color: var(--color-css);
}
.color-css:hover {
  fill: var(--color-css);
}

.color-python {
  background-color: var(--color-python);
}
.color-python::after,
.color-python::before {
  border-top-color: var(--color-python);
  border-bottom-color: var(--color-python);
}
.color-python:hover {
  fill: var(--color-python);
}

.color-haskell {
  background-color: var(--color-haskell);
}
.color-haskell::after,
.color-haskell::before {
  border-top-color: var(--color-haskell);
  border-bottom-color: var(--color-haskell);
}
.color-haskell:hover {
  fill: var(--color-haskell);
}

.color-bootstrap {
  background-color: var(--color-bootstrap);
}
.color-bootstrap::after,
.color-bootstrap::before {
  border-top-color: var(--color-bootstrap);
  border-bottom-color: var(--color-bootstrap);
}
.color-bootstrap:hover {
  fill: var(--color-bootstrap);
}

.color-atom {
  background-color: var(--color-atom);
}
.color-atom::after,
.color-atom::before {
  border-top-color: var(--color-atom);
  border-bottom-color: var(--color-atom);
}
.color-atom:hover {
  fill: var(--color-atom);
}

.color-meteor {
  background-color: var(--color-meteor);
}
.color-meteor::after,
.color-meteor::before {
  border-top-color: var(--color-meteor);
  border-bottom-color: var(--color-meteor);
}
.color-meteor:hover {
  fill: var(--color-meteor);
}

<!--HTML-->
<main class="hexagon-container">
  <div class="hexagon color-sass">
    <svg aria-labelledby="simpleicons-sass-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-sass-icon">Sass icon</title><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"/></svg>
  </div>
  <div class="hexagon color-angular">
    <svg aria-labelledby="simpleicons-angular-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-angular-icon">Angular icon</title><path d="M9.93 12.645h4.134L11.996 7.74"/><path d="M11.996.009L.686 3.988l1.725 14.76 9.585 5.243 9.588-5.238L23.308 3.99 11.996.01zm7.058 18.297h-2.636l-1.42-3.501H8.995l-1.42 3.501H4.937l7.06-15.648 7.057 15.648z"/></svg>
  </div>
  <div class="hexagon color-gulp">
    <svg aria-labelledby="simpleicons-gulp-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-gulp-icon">Gulp icon</title><path d="M15.156 19.432l.636-1.084s-1.444.591-3.86.591c-2.418 0-3.84-.568-3.84-.568l.711 1.183.252 3.729c0 .403 1.314.718 2.936.718 1.623 0 2.938-.314 2.938-.718l.229-3.835v-.016zm.615-7.046c-.769.046-1.153.903-1.539 1.805-.143.33-.63 1.737-.948 1.563-.318-.173.413-1.329.619-2.017-.237.174-1.105.849-1.329.215-.358.314-1.129.48-1.042-.329-.191.345-.621.823-1.139.614-.673-.255.395-2.411.66-2.307.266.121-.053.6-.136.794-.186.419-.398.958-.255 1.063.24.194.904-.703.919-.719.124-.165.479-1.229.763-1.107.285.134-.711 1.541-.34 1.826.076.06.383-.03.569-.239.12-.12.078-.42.479-1.378.404-.959.764-2.156 1.039-2.066s.049.703-.051.943c-.464 1.078-1.268 2.844-.89 2.71.374-.135.569-.135.943-.569.374-.434.345-1.152.599-1.137.24.014.21.254.15.418.24-.27 1.152-.868 1.363-.284.254.688-1.304 1.692-.914 1.632.375-.045.988-.434 1.258-.793l.719-6.5s-.734.6-5.361.6-5.284-.584-5.284-.584l.613 5.93c.33-.928 1.108-2.814 2.322-2.74.554.03 1.303 1.109.658 1.139-.27.015-.3-.539-.614-.614-.239-.046-.554.135-.763.345-.404.404-1.304 2.006-1.184 2.801.15 1.018 1.407-.346 1.617-.75.149-.283.254-1.138.568-1.048.33.09-.029.974-.27 1.737-.27.869-.404 1.781-.732 1.676-.33-.104.209-1.227.178-1.422-.313.299-.883 1.02-1.631.659l.374 3.699s1.019.793 4.073.793 4.118-.793 4.118-.793l.479-4.283c-.389.39-1.617 1.063-1.692.3-.059-.614 1.333-1.498.974-1.514l.06-.069zM17.346.669l-2.659 2.8-.486 1.901c1.881.12 3.189.386 3.189.694 0 .419-2.414.757-5.391.757s-5.39-.343-5.39-.763c0-.419 2.414-.764 5.391-.764.423 0 .844 0 1.264.016l.561-2.276L16.65.039c.068-.09.28-.015.474.15.194.149.299.344.239.434v.03l-.017.016zm-3.834 5.795s-.523 0-.61-.08c-.022-.025-.036-.058-.036-.09 0-.058.039-.091.09-.11l.044.075c-.021.006-.029.015-.033.023 0 .041.314.069.555.066.239-.003.531-.023.533-.064 0-.012-.023-.023-.061-.033l.045-.072c.063.02.117.058.117.121 0 .11-.141.128-.23.141-.107.015-.412.023-.412.023h-.002z"/></svg>
  </div>
  <div class="hexagon color-html">
    <svg aria-labelledby="simpleicons-html5-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-html5-icon">HTML5 icon</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
  </div>

  <div class="hexagon color-git">
    <svg aria-labelledby="simpleicons-git-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-git-icon">Git icon</title><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>
  </div>
  <div class="hexagon color-javascript">
    <svg aria-labelledby="simpleicons-javascript-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-javascript-icon">JavaScript icon</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>
  </div>
  <div class="hexagon color-vuejs">
    <svg aria-labelledby="simpleicons-vuejs-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-vuejs-icon">Vue.js icon</title><path d="M19.197 1.608l.003-.006h-4.425L12 6.4v.002l-2.772-4.8H4.803v.005H0l12 20.786L24 1.608"/></svg>
  </div>
  <div class="hexagon color-rails">
    <svg aria-labelledby="simpleicons-rails-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title id="simpleicons-rails-icon">Rails icon</title><path d="M20.8848485 15.8107143v1.1635714h1.9818182c.4060606 0 1.1030303-.315 1.1272727-1.19571427v-.45c0-.75214286-.5818182-1.1957143-1.1272727-1.1957143h-.9878788v-.54h1.9575757v-1.17h-1.8787878c-.4848485 0-1.1333334.42428573-1.1333334 1.215v.405c0 .7907143.6424243 1.1957143 1.1333334 1.1957143 1.3636363.00642857-.3272728 0 .9333333 0v.56571428l-2.0060606.0064286zm-10.6181818-.28285716s1.060606-.09642857 1.060606-1.5492857c0-1.45285715-1.2848485-1.58785715-1.2848485-1.58785715H7.72727273v4.5835714H8.8909091v-1.1057143l1.0060606 1.1057142h1.7212121l-1.3515151-1.4464286zm-.44848488-.93857143H8.8909091v-1.0478571h.93333332s.26060608.1028572.26060608.5207143c0 .4178572-.26666668.5271429-.26666668.5271429zM14.2 12.4228572h-1.1818182c-.8424242 0-1.1272727.81-1.1272727 1.1957143v3.35571427h1.1818182v-.8035714h1.1090909v.8035714h1.1454545V13.6185715c0-.97714286-.8363636-1.1957143-1.1272727-1.1957143zm-.0181818 2.44928572h-1.1151515V13.76s0-.2507143.3696969-.2507143h.4060606c.3272728 0 .3333334.2507143.3333334.2507143v1.11214286h.0060606zm1.6848485-2.44928573h1.230303v4.5514285h-1.230303v-4.5514285zm2.9575757 3.375v-3.375H17.6v4.5514285h2.8787879v-1.1764285h-1.6545455z"/><path d="M.42424242 16.9742857h4.7878788S4.2969697 12.545 7.3272727 10.75142858c.66060607-.34071428 2.76363638-1.61357143 6.20606058 1.08642857.1090909-.09642857.2121212-.17357143.2121212-.17357143s-3.1515151-3.33642856-6.66060602-2.9635714c-1.76363636.16714284-3.93333333 1.87071427-5.2060606 4.12071427-1.27272726 2.25-1.45454546 4.1528571-1.45454546 4.1528571z"/><path d="M.42424242 16.9742857h4.7878788S4.2969697 12.545 7.3272727 10.75142858c.66060607-.34071428 2.76363638-1.61357143 6.20606058 1.08642857.1090909-.09642857.2121212-.17357143.2121212-.17357143s-3.1515151-3.33642856-6.66060602-2.9635714c-1.76363636.16714284-3.93333333 1.87071427-5.2060606 4.12071427-1.27272726 2.25-1.45454546 4.1528571-1.45454546 4.1528571z"/><path d="M.42424242 16.9742857h4.7878788S4.2969697 12.545 7.3272727 10.75142858c.66060607-.34071428 2.76363638-1.61357143 6.20606058 1.08642857.1090909-.09642857.2121212-.17357143.2121212-.17357143s-3.1515151-3.33642856-6.66060602-2.9635714c-1.76969696.16714284-3.93939393 1.87071427-5.2121212 4.12071427C.6 15.0714285.4242424 16.9742857.4242424 16.9742857zM10.4 9.0607143L10.4242424 8.63c-.0545454-.03214286-.2060606-.1092857-.58787876-.225l-.02424243.4242857c.2.0707143.3939394.14785716.5878788.2314286z"/><path d="M9.82424242 10.42357143l-.02424242.405c.2.00642857.4.03214286.6.07714286l.0242424-.3985715c-.2060606-.045-.4060606-.0707143-.59999998-.0835715zm-2.24242424-2.0057143h.06060606l-.12121212-.39214284c-.1878788 0-.38181818.0128571-.58181818.0385714l.1151515.3792857c.1757576-.0192857.35151517-.0257143.52727274-.0257143zm.2909091 2.3657143l.13939393.44357143c.1757576-.09.3515152-.16714286.5272728-.225l-.1333333-.42428572c-.2060606.06428572-.3818182.135-.5333333.2057143zM5.1212121 9.09285713l-.27272727-.44357142c-.15151515.0835715-.3090909.1735715-.47272727.2764286l.27878787.45c.15757576-.1028571.3090909-.1992857.46666667-.2828571zm1.24242424 2.89285716l.2909091.4628571c.1030303-.1607143.22424242-.3085715.35757575-.4564286L6.7393939 11.555c-.13939394.135-.26666667.28285714-.37575758.4307143zm-.87878788 2.07l.4909091.4114285C6 14.2164285 6.04242424 13.9657143 6.1030303 13.715l-.43636363-.36642857c-.07878788.23785714-.13333334.47571428-.1818182.70714286zM2.830303 11.0021428L2.4 10.60357142c-.15757576.1607143-.3090909.32142858-.44848485.48214287L2.41818182 11.51c.12727273-.17357143.26666666-.34714286.4121212-.50785714zM1 13.8757143l-.6969697-.27c-.1151515.27642856-.24242424.59785713-.3030303.77142856l.6969697.27C.77575758 14.42857143.9030303 14.11357143 1 13.8757143zm4.3939394 1.81285713c.0121212.34071428.04242424.61714286.07272727.81L6.1939394 16.775c-.05454546-.2507143-.10909092-.53357143-.14545455-.8357143l-.65454546-.25071427z"/></svg>
  </div>

  <div class="hexagon color-circleci">
    <svg aria-labelledby="simpleicons-circleci-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-circleci-icon">CircleCI icon</title><path d="M8.963 12c0-1.584 1.284-2.855 2.855-2.855 1.572 0 2.856 1.284 2.856 2.855 0 1.572-1.284 2.856-2.856 2.856-1.57 0-2.855-1.284-2.855-2.856zm2.855-12C6.215 0 1.522 3.84.19 9.025c-.01.036-.01.07-.01.12 0 .313.252.576.575.576H5.59c.23 0 .433-.13.517-.333.997-2.16 3.18-3.672 5.712-3.672 3.466 0 6.286 2.82 6.286 6.287 0 3.47-2.82 6.29-6.29 6.29-2.53 0-4.714-1.5-5.71-3.673-.097-.19-.29-.336-.517-.336H.755c-.312 0-.575.253-.575.576 0 .037.014.072.014.12C1.514 20.16 6.214 24 11.818 24c6.624 0 12-5.375 12-12 0-6.623-5.376-12-12-12z"/></svg>
  </div>
  <div class="hexagon color-webpack">
    <svg aria-labelledby="simpleicons-webpack-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-webpack-icon">Webpack icon</title><path d="M21.0157 18.1202L12.351 23v-3.8007l5.3986-2.9567 3.266 1.8776zm.5927-.5344V7.3805l-3.1708 1.822v6.5593l3.1708 1.824zm-18.6827.5344L11.5904 23v-3.8007l-5.3986-2.9567-3.266 1.8776zm-.5927-.5344V7.3805l3.1707 1.822v6.5593l-3.1707 1.824zm.371-10.8656l8.8864-5.0056v3.6748L5.8974 8.507l-.0434.0248-3.15-1.8116zm18.5335 0L12.351 1.7146v3.6748l5.693 3.1177.0434.0248 3.15-1.8116zm-9.647 11.6146l-5.3262-2.9155V9.642l5.326 3.062v5.6308zm.7605 0l5.326-2.9155V9.642l-5.326 3.062v5.6308zM6.625 8.9734l5.3467-2.928 5.3468 2.928-5.3468 3.0744L6.625 8.9734z"/></svg>
  </div>
  <div class="hexagon color-bootstrap">
    <svg aria-labelledby="simpleicons-bootstrap-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-bootstrap-icon">Bootstrap icon</title><path d="M20 0H4C1.793.006.006 1.793 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-2.187 16.855c-.2.482-.517.907-.923 1.234-.42.34-.952.62-1.607.82-.654.203-1.432.305-2.333.305H6.518v-14h6.802c1.258 0 2.266.283 3.02.86.76.58 1.138 1.444 1.138 2.61 0 .705-.172 1.31-.518 1.81-.344.497-.84.886-1.48 1.156v.046c.854.18 1.515.585 1.95 1.215s.658 1.426.658 2.387c0 .538-.104 1.05-.3 1.528l.025.027zm-2.776-3.45c-.41-.375-.986-.558-1.73-.558H8.985v4.368h4.334c.74 0 1.32-.192 1.73-.58.41-.385.62-.934.62-1.64-.007-.69-.21-1.224-.62-1.59h-.017zm-.6-2.823c.396-.336.59-.817.59-1.444 0-.704-.175-1.204-.53-1.49-.352-.285-.86-.433-1.528-.433h-4v3.863h4c.583 0 1.08-.17 1.464-.496z"/></svg>
  </div>
  <div class="hexagon color-python">
    <svg viewBox="0 0 24 24" aria-labelledby="simpleicons-python-icon" xmlns="http://www.w3.org/2000/svg" role="img"><title id="simpleicons-python-icon">Python icon</title><path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22z"/><path d="M21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/></svg>
  </div>

  <div class="hexagon color-haskell">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="simpleicons-haskell-icon" role="img"><title id="simpleicons-haskell-icon">Haskell icon</title><path class="a" d="M.006 20.47L5.649 12 .006 3.531h4.235l5.674 8.47-5.674 8.468zm5.643 0L11.29 12 5.65 3.531h4.266l11.253 16.938h-4.224l-3.535-5.34-3.495 5.34zM19.3 15.525l-1.877-2.827h6.571v2.826zm-2.826-4.235l-1.877-2.827h9.387v2.827z"/></svg>
  </div>
  <div class="hexagon color-meteor">
    <svg aria-labelledby="simpleicons-meteor-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-meteor-icon">Meteor icon</title><path d="M0 .234l21.912 20.537s.412.575-.124 1.151c-.535.576-1.236.083-1.236.083L0 .234zm6.508 2.058l17.01 15.638s.413.576-.123 1.152c-.534.576-1.235.083-1.235.083L6.508 2.292zM1.936 6.696l17.01 15.638s.412.576-.123 1.152-1.235.082-1.235.082L1.936 6.696zm10.073-2.635l11.886 10.927s.287.401-.087.805-.863.058-.863.058L12.009 4.061zm-8.567 7.737l11.886 10.926s.285.4-.088.803c-.375.403-.863.059-.863.059L3.442 11.798zm14.187-5.185l5.426 4.955s.142.188-.044.377c-.185.188-.428.027-.428.027l-4.954-5.358v-.001zM6.178 17.231l5.425 4.956s.144.188-.042.377-.427.026-.427.026l-4.956-5.359z"/></svg>
  </div>
  <div class="hexagon color-css">
    <svg aria-labelledby="simpleicons-css3-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-css3-icon">CSS3 icon</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>
  </div>
  <div class="hexagon color-atom">
    <svg aria-labelledby="simpleicons-atom-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-atom-icon">Atom icon</title><path d="M20.496 9.026c-2.183-.93-5.116-1.53-8.25-1.695-.5-.03-.987-.04-1.45-.04 2.318-2.83 4.802-4.73 6.437-4.79.322-.013.595.055.813.196.706.458.905 1.768.545 3.59-.04.25.12.493.36.54.25.05.49-.11.54-.36.45-2.28.12-3.846-.94-4.538-.38-.248-.84-.365-1.35-.346-2.05.077-4.94 2.3-7.59 5.72-1.154.035-2.24.13-3.232.287-.646-2.897-.39-4.977.594-5.477.138-.073.285-.11.457-.124.697-.054 1.66.395 2.71 1.27.194.16.486.14.646-.06.163-.195.134-.48-.06-.645C9.466 1.51 8.304 1 7.354 1.07c-.286.025-.556.098-.803.22-1.19.607-1.67 2.327-1.37 4.838.07.52.16 1.062.29 1.62C2.19 8.404.1 9.718.01 11.372c-.06 1.17.865 2.284 2.68 3.222.224.115.502.03.62-.2.114-.224.03-.5-.2-.616C1.66 13.032.88 12.19.927 11.42c.05-1.08 1.772-2.19 4.76-2.78.27.994.62 2.032 1.05 3.09-1.018 1.888-1.756 3.747-2.137 5.4-.56 2.465-.26 4.22.86 4.948.36.234.78.35 1.247.35.935 0 2.067-.46 3.347-1.372.21-.15.256-.435.11-.64-.147-.206-.433-.256-.64-.106-1.544 1.103-2.844 1.472-3.562 1.003-.76-.495-.926-1.943-.46-3.976.32-1.386.907-2.93 1.708-4.52.2.438.41.876.63 1.313 1.425 2.796 3.17 5.227 4.91 6.845 1.386 1.29 2.674 1.963 3.735 1.963.35 0 .68-.075.976-.223 1.145-.585 1.64-2.21 1.398-4.575-.224-2.213-1.06-4.91-2.354-7.6-.11-.227-.384-.323-.61-.216-.23.11-.33.385-.22.612 2.69 5.602 2.88 10.19 1.37 10.96-1.59.813-5.424-2.355-8.39-8.18-.34-.655-.637-1.3-.9-1.93.34-.608.7-1.22 1.095-1.83.395-.604.806-1.188 1.224-1.745h.394c.54 0 1.126.01 1.734.048 6.53.343 10.975 2.56 10.884 4.334-.04.765-.924 1.538-2.425 2.12-.234.096-.352.36-.26.596.07.18.24.292.426.292.058 0 .114-.01.167-.03 1.905-.74 2.95-1.756 3.01-2.93.07-1.33-1.17-2.61-3.5-3.6v-.01zM8.08 9.45c-.27.415-.52.827-.764 1.244-.292-.768-.532-1.51-.723-2.215.713-.11 1.485-.19 2.31-.24-.28.39-.554.794-.82 1.21v-.01z"/><circle cx="12.005" cy="12" r="1.375"/></svg>
  </div>
</main>

<footer>
  <p>Thanks to <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">CSS-Tricks</a>, <a href="http://csshexagon.com/">CSS Hexagon, Please</a> and <a href="https://simpleicons.org/">Simple Icons</a>.</p>
</footer>
				</div>
