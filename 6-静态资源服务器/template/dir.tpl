<!DOCTYPE html>
<html>

<head>
  <title>{{title}}</title>
  <style type="text/css">
    body {
      margin:30px;
    }
    a{
      display: block;
      font-size: 30px;
    }
  </style>
</head>

<body>
  {{#each files}}
  <a href="{{../dir}}/{{this}}">{{this}}</a>
  {{/each}}
</body>

</html>
