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
  <link rel="stylesheet" href="<?php echo base_url('css/first_style.css');?>">
</head>
<body>
  
  <div class="text-center">
    <h1>Welcome to <b class="fonts">Engine4U</b></h1>
  </div>
  <!--Instruction-->
      <div class="container firsts">
        <div class="row">
          <div class="col-sm-4 tells">
            <h2>Instruction</h2>
            <div class="customer_instruction">
              <h4>FOR CUSTOMER</h4><br>
              <p>To rent a car, you need:</p>
              <p>1. Login to the system</p>
              <p>2. Provide searching criterias</p>
              <p>3. Provide exact your identity and credit car information</p>
              <p>4. Confirm booking</p>
            </div>
            <div class="host_instruction">
              <h4>FOR HOST</h4><br>
              <p>To give a car for rent, you need:</p>
              <p>1. Login to the system</p>
              <p>2. Add listing</p>
              <p>3. Equip your listing with details</p>
              <p>4. Publish your listing</p>
            </div>
            <a class="btn btn-primary">LOG IN</a>
            <a class="btn btn-primary">SIGN IN</a>
            <a href="<?php echo site_url('main/main_page'); ?>" class="btn btn-primary">MAIN PAGE</a>
            <hr>
          </div>
  <!--End Instruction-->
          <div class="col-sm-8 slid">
            <div id="myCarousel" class="carousel slide " data-ride="carousel">

              <!-- Wrapper for slides -->
              <div class="carousel-inner" role="listbox">
                <div class="item active">
                  <img class="img-responsive" style="width:100%" src="<?php echo base_url('images/car.jpg')?>" alt="Image">

                </div>
                <div class="item">
                  <img class="img-responsive" style="width:100%" src="<?php echo base_url('images/car2.jpg')?>" alt="Image">

                </div>
              </div>
            </div>
          </div>

      </div>

</body>
</html>
