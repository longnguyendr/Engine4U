
<div class="container" style="margin-top:80px;">
  <ul class="breadcrumb">
    <li class="active">Booking details</li>
    <li>Identity prove</li>
    <li>Confirm payment</li>
  </ul>
</div>

<div class="container" style="box-shadow:0px 5px 10px;padding: 15px;">
  <!--Open row-->
  <div class="row">
      <div class="col-sm-6">
        <?php $data['page']='cart/cart5';
            $this->load->view($data['page']);?>
      </div>
      <!--Right Panel Price display-->
      <div class="col-sm-6">
            <div class="col-sm-12 text-center">
                <h2>Description</h2>
            </div>
            <div class="col-sm-12">
                <h3>Car Price: <span>15$</span></h3>
            </div>
            <!--Images-->
            <div class="col-sm-12">
              <div class="col-sm-4">
                <img class="img-responsive"  src="<?php echo base_url('images/car.jpg')?>" alt="Image">
              </div>
              <div class="col-sm-4">
                <img class="img-responsive"  src="<?php echo base_url('images/car.jpg')?>" alt="Image">
              </div>
              <div class="col-sm-4">
                <img class="img-responsive"  src="<?php echo base_url('images/car.jpg')?>" alt="Image">
              </div>
            </div>
            <!--End Images-->
            <div class="col-sm-12 text-center">
                <h3>Car specification</h3>
            </div>
            <div class="col-sm-12" style="padding-top:10px;box-shadow:0px 4px 7px 0px;border-radius:10px;background-color:silver;">
                <p>Model: </p>
                <p>Location: </p>
                <p>Model: </p>
                <p>Location: </p>
                <p>Model: </p>
                <p>Location: </p>
            </div>
        </div>
        <!--End Right Panel-->
        <div class="col-sm-12 text-left" style="padding-top:20px;">
            <a href="<?php echo site_url('cart/cart2s')?>" type="button" class="btn btn-primary" >Continue</a>
        </div>
  </div>
  <!--End row-->

</div>
<hr>
  <script src="<?php echo base_url('js/datepicker.js'); ?>"></script>
