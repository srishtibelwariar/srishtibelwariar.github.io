<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">


		<title>Srishti Belwariar</title>
		<link rel="icon" href="images/favicon.png">

		<link rel="stylesheet" href="style.css">

  </head>
  <body>

    <h2>Add React in One Minute</h2>
    <p>This page demonstrates using React with no build tooling.</p>
    <p>React is loaded as a script tag.</p>

    <!-- We will put our React component inside this div. -->
    <div id="like_button_container"></div>

    <!-- Load React. -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

    <!-- Load our React component. -->
    <script src="like_button.js"></script>

<div class="container">
  <div class="icecream">
    <div class="flavor">
      <div class="flavours"></div>
    </div>
    <div class="stick"></div>
  </div>
</div>

<!-- <div class='scene'>
  <div class='scene_titanShadow'></div>
  <div class='t_wrap'>
    <div class='scene_titan'>
      <div class='eyes'>
        <div class='eye eye--left'></div>
        <div class='eye eye--right'></div>
      </div>
    </div>
  </div>
  <div class='scene_saturn'>
    <div class='scene_saturn__face'>
      <div class='face_clip'>
        <div class='eye eye--left'></div>
        <div class='eye eye--right'></div>
        <div class='mouth'></div>
      </div>
    </div>
    <div class='scene_saturn__shadow'></div>
    <div class='scene_saturn__shadowRing'></div>
    <div class='scene_saturn__sparks'>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
      <div class='spark'></div>
    </div>
    <div class='scene_saturn__ring'>
      <div class='small'>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
        <div class='small_part'></div>
      </div>
      <div class='layer'>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
      </div>
      <div class='layer'>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
      </div>
      <div class='layer'>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
        <div class='layer_part'></div>
      </div>
    </div>
  </div>
</div>
 -->


  </body>
</html>
