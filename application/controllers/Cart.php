<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cart extends CI_Controller {

  public function Cart2s($slug = null){
    $data['cars'] = $this->search_model->get_carss($slug);
    $car_id = $data['cars']['carID'];
    $data['page']='cart/cart2';
    $this->load->view('menu/content',$data);
  }
  public function Cart3s($slug = null){
    $data['cars'] = $this->search_model->get_carss($slug);
    $car_id = $data['cars']['carID'];
    $data['page']='cart/cart3';
    $this->load->view('menu/content',$data);
  }
  public function Cart4s($slug = null){
    $data['cars'] = $this->search_model->get_carss($slug);
    $car_id = $data['cars']['carID'];
    $data['page']='cart/cart4';
    $this->load->view('menu/content',$data);
  }
  public function Cart5s(){

    $data['page']='cart/cart5';
    $this->load->view('menu/content',$data);
  }
}
