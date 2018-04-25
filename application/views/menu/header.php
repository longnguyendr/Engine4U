<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Engine4U</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Black+And+White+Picture" rel="stylesheet">
  <link rel="stylesheet" href="<?php echo base_url('css/style.css');?>">
  <link rel="stylesheet" href="<?php echo base_url('css/search.css');?>">
  <link rel="stylesheet" href="<?php echo base_url('css/index.css');?>">
  <script src="<?php echo base_url('js/test.js'); ?>"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js"></script>

</head>

  <body>
<div class="icons">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="<?php echo site_url('main/main_page'); ?>">Engine4U</a>
          </div>

          <div class="collapse navbar-collapse" id="myNavbar">

            <ul class="nav navbar-nav navbar-right hovers">
              <li><a href="#">Host</a></li>
              <li><a data-toggle="modal" data-target="#myModal">Intruction</a></li>
              <li><a href="<?php echo site_url('search/search_engine'); ?>">Search</a></li>
              <li><a href="<?php echo site_url('main/test'); ?>"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>

          </div>

      </div>
    </nav>
</div>
