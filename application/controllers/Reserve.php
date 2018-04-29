<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Reserve extends CI_Controller {

  public function Reserves($slug = null){
    $data['cars'] = $this->search_model->get_carss($slug);
    $car_id = $data['cars']['carID'];
    $data['page']='reserve/reserve';
    $this->load->view('menu/content',$data);
  }
  public function car($slug = null)
  {
    $data['cars'] = $this->search_model->get_carss($slug);
    $car_id = $data['cars']['carID'];
    $data['page'] = 'cart/cart';
    $this->load->view('menu/content', $data);
  }
}
